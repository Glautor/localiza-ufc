import * as firebase from 'firebase';
import "firebase/firestore";
import {Alert} from "react-native";

class Firebase {
  constructor() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(this.firebaseConfig);
    }
  }

  firebaseConfig = {
    apiKey: "AIzaSyCAEcA0S8V3pui5JT9daKqvgwToswFz5pU",
    authDomain: "localiza-ufc-ae1f0.firebaseapp.com",
    projectId: "localiza-ufc-ae1f0",
    storageBucket: "localiza-ufc-ae1f0.appspot.com",
    messagingSenderId: "416784167534",
    appId: "1:416784167534:web:601062edf50786bfeaec7f"
  };

  async signUp(email, password, name, registration) {
    var result = false
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const currentUser = firebase.auth().currentUser;  
      if(currentUser != null){
        const db = firebase.firestore();
        db.collection("users")
        .doc(currentUser.uid)      
        .set({
          email: currentUser.email,
          name: name,
          registration: registration,
        });
        result = true
      }      
    } catch (err) {
      Alert.alert("Erro ao cadastrar!", err.message);
      result = false
    }

    return result
  }

  async getItems() {
    var itemList = [];
  
    var snapshot = await firebase
      .firestore()
      .collection("disciplinas")
      .get();
  
    snapshot.forEach((doc) => {
      var data = doc.data();
      data['id'] = doc.id;

      itemList.push(data);
    });
  
    return itemList;
  }
  async newItem(subjectData) {
    let result = false;

    try {
      await firebase.firestore()
      .collection('disciplinas')
      .add(subjectData);

      result = true;
    } catch (err) {
      Alert.alert("Erro ao cadastrar disciplina!", err.message);
      result = false;
    }

    return result;
  }

  async signIn(email, password) {
    var result = false
    try{
      await firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function (user){        
        console.log(user);
        result = true
      })
    }catch(error){
      result = false
    } 
    return result  
  }

  saveData(path, key, data) {
    firebase.database()
      .ref(path + key)
      .set(data);
  }

  setListener(path, key, onChange) {
    firebase.database()
      .ref(path + key)
      .on('value', (snapshot) => onChange(snapshot.val()));
  }

  getData(path, key) {
    let data;

    firebase.database()
      .ref(path + key)
      .once('value', (snapshot) => data = snapshot.val());

    return data;
  }

  getNFirst(path, n) {
    let data;

    firebase.database()
      .ref(path)
      .orderByValue().limitToFirst(n)
      .once('value', (snapshot) => data = snapshot.val());

    return data;
  }    
}

export default new Firebase();