import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native'
import styles from './estilos';

export default function App() {
  interface Produto {
    id: number;
    title: string;
    price: number;
    image: string;
  }

  useEffect(() => {
    carregarProdutos();
  }, []);

  const [listProdutos, setListProdutos] = useState<Produto[]>([])

  const carregarProdutos = async () => {
    const response =
      await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);
    setListProdutos(data);
  }


  return (
    <ScrollView>
      <View style={styles.container}>
        {listProdutos.map((prod) =>
          <View style={styles.listItem} key={prod.id}>
            <Image source={{ uri: prod.image }} style={styles.image} />
            <Text style={styles.titulo}>{prod.title}</Text>
            <Text style={styles.preco}>{
            prod.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL"
            })
            }</Text>
          </View>
        )}
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}




