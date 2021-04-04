import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30
  },
  input: {
      height: 46,
      alignSelf: 'stretch',
      backgroundColor: '#f5f5f5',
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 4,
      marginTop: 5,
      paddingHorizontal: 15
  },
  button: {
      height: 46,
      alignSelf: 'stretch',
      backgroundColor: '#03679D',
      borderRadius: 4,
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center'
  },
  buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16
  },
  logoImg: {
    width: 300,
    height: 300,
    marginTop: -50
  },
  createAccountTextWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10
  },
  createAccountLink: {
    color: '#03679D',
  },
  noAccountText: {
    color: '#999',
  }
});

export default styles