import firebase from './firebase';

class User {
    path = 'user/';

    userName = '';
    userData = {
        fullName: '',
        email: '',
        password: '',
        registry: '',
    };

    saveUser() {
        firebase.saveData(this.path, this.userName, this.userData);
    }

    getUser(userName) {
        this.userName = userName;
        return this.updateUser();
    }
    
    updateUser() {
        let userData = firebase.getData(this.path, this.userName);

        if (userData === null) {
            this.userData = userData;

            return true;
        } else {
            return false;
        }
    }

    loginUser(userName, userPassword) {
        let oPassword = firebase.getData(this.path + userName + '/', 'password');

        if (oPassword === userPassword) {
            this.userName = userName;
            this.updateUser();

            return true;
        } else {
            return false;
        }
    }
}

export default User;