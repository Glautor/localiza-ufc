import * as firebase from 'firebase';

class Firebase {
  constructor() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(this.firebaseConfig);
    }
  }

  firebaseConfig = {
    apiKey: "AIzaSyC6lqEkMSSbH1cVks22W5GstqJZfyB6WN0",
    authDomain: "localiza-ufc.firebaseapp.com",
    databaseURL: "https://localiza-ufc-default-rtdb.firebaseio.com",
    projectId: "localiza-ufc",
    storageBucket: "localiza-ufc.appspot.com",
    messagingSenderId: "1080683477471",
    appId: "1:1080683477471:web:ca2de2728ee698d568ec6a",
    measurementId: "G-KZY9K9J30T"
  };

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