import firebase from './firebase';

class Subject {
    path = 'subject/';

    subjectCode = '';
    subjectData = {
        name: '',
        time: '',
        building: '',
        class: '',
        teacher: '',
        semester: '',
        image: '',
    }

    saveSubject() {
        firebase.saveData(this.path, this.subjectCode, this.subjectData);
    }

    getSubject(subjectCode) {
        this.subjectCode = subjectCode;
        return this.updateSubject();
    }

    updateSubject() {
        let subjectData = firebase.getData(this.path, this.subjectCode);

        if (subjectData === null) {
            this.subjectData = subjectData;
            
            return true;
        } else {
            return false;
        }
    }
}

export default Subject;