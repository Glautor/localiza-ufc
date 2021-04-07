import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 380,
    height: 640,
    marginBottom: -20
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  headerWrapper: {
    width: '112%',
    marginTop: -10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  subjectNameWraper: {
    width: '100%',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subjectName: {
    width: '70%',
    fontSize: 17,
    fontWeight: 'bold',
    color: 'rgb(144, 143, 143)',
    textAlign: 'center',
  },
  buttonClose: {
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCloseText: {
    color: 'rgb(144, 143, 143)',
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  informationName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'rgb(144, 143, 143)',
  },
  infomationsWrapper: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    display: 'flex',
    width: '100%',
    marginTop: 30,
  },
  gpsPicture: {
    width: 300,
    height: 400,
    margin: 30
  },
  containerMaps: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
  map: {
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    width: 300,
    height: 300,
  },
  buttonOpenGps: {
    marginTop: 20,
    width: 300,
    backgroundColor: "#2196F3",
  }
});

export default styles