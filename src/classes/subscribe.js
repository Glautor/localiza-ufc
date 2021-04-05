import firebase from './firebase';

class Subscribe {
    path = 'subs/';

    subToSubject = (userName, subjectCode) => {
        let data = {};
        data[userName] = true;
        
        firebase.saveData(this.path, subjectCode, data);
    };

    unsubToSubject = (userName, subjectCode) => {
        let data = {};
        data[userName] = false;
        
        firebase.saveData(this.path, subjectCode, data);
    };

    getSubList = (subjectCode) => {
        return firebase.getData(this.path, subjectCode);
    };
}

export default new Subscribe();