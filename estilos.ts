

import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    backgroundColor: '#b9f4fcff',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    margin: 10,
    flexWrap: 'wrap',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,

  },
  image: {
    width: 50,
    height: 50,
  },
  titulo: {
    width: '50%',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10
  },
  preco: {
    fontSize: 14,
    margin: 10
  }
  
});

export default styles;