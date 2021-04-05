import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  title: {
    fontSize: 32,
  },
  courseImage: {
    width: 70,
    height: 70
  },
  courseName: {
    marginTop: 10,
    fontSize: 12,
    textAlign: 'center',
    color: 'rgb(144, 143, 143)'
  },
  subjectName: {
    fontSize: 15,
    color: 'rgb(144, 143, 143)'
  },
  courseContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subjectContainer: {
    flex: 2,
    marginLeft: 18,
    justifyContent: 'space-around'
  },
  subjectHour: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#363636'
  },
  subjectWeekDays: {
    color: 'rgb(144, 143, 143)'
  },
  iconImg: {
    width: 30,
    height: 30,
  },
  iconStyle: {
    position: 'absolute',
    marginTop: 50,
    marginLeft: 310,
  }
});

export default styles