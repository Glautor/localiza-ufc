import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10
  },
  navbar: {
    position: 'absolute',
    width: '100%',
    height: 100,
    borderStyle: 'solid',
    borderTopWidth: 0.5,
    borderColor: '#9AA7B1',
    display: 'flex',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconWrapper: {
    display: 'flex'
  },
  pageListItem: {
    width: '33%',
    display: 'flex',
    alignItems: 'center',
  },
  pageListItemText: {
    color: '#737373',
    fontSize: 12,
    marginTop: 5
  },
  pageListItemIcon: {
    width: 30,
    height: 30
  }
});

export default styles