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

  salvarUsuario(uNome, uNomeCompleto, uEmail, uSenha, aMatricula) {
    firebase.database()
      .ref('usuarios/' + uNome).set({
        nomeCompleto: uNomeCompleto,
        email: uEmail,
        senha: uSenha,
        matricula: aMatricula,
      });
  }

  salvarDisciplina(dNome, dCodigo, dHorario, dBloco, dSala, dProfessor, dSemestre) {
    firebase.database()
      .ref('disciplinas/' + dNome).set({
        codigo: dCodigo,
        horario: dHorario,
        bloco: dBloco,
        sala: dSala,
        professor: dProfessor,
        semestre: dSemestre,
      })
  }
}

export default new Firebase();