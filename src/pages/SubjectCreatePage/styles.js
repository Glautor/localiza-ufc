import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 30,
    overflow: 'scroll',
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

  saveButton: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#03679D',
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  locationLoaded: {
    color: '#63B68D',
    marginTop: 8
  },

  myLocalizationButtonText: {
    color: '#03679D',
  },

  myLocalizationButton: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderColor: '#03679D',
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  deleteButton: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#9AA7B1',
    borderRadius: 4,
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

  hasAccountText: {
    color: '#999',
  },

  signInLink: {
    color: '#03679D',
  },

  containerMap: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  map: {
    marginTop: 8,
    width: 335,
    height: 200,
  },
});

export default styles