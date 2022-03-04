import { StyleSheet } from 'react-native';
import { colors } from './Colors';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
    color: '#000',
    textAlign: 'justify',
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
});
