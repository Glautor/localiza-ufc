import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F9',
    justifyContent: 'center',
  },
  navbar: {
    position: 'absolute',
    width: '100%',
    height: 50,
    backgroundColor: '#ccc',
    display: 'flex',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#03679D',
  },
  pageListItem: {
    width: '33%',
    display: 'flex',
    alignItems: 'center',
  },
  pageListItemText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});

export default styles