import firebase from './firebase';

class General {
    getNSubjects(n) {
        return firebase.getNFirst('subject/', n);
    }

    getAllSubjects() {
        return firebase.getData('', 'subject');
    }
}

export default General;