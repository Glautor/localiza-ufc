import firebase from './firebase';

class User {
    userName = '';
    userData = {
        userFullName: '',
        userEmail: '',
        userPassword: '',
        userRegistry: '',
    };

    saveUser() {
        firebase.saveData('user/', this.userName, this.userData);
    }

    createUser(userName, userFullName, userEmail, userPassword, userRegistry) {
        this.userName = userName;
        this.userData.userFullName = userFullName;
        this.userData.userEmail = userEmail;
        this.userData.userPassword = userPassword;
        this.userData.userRegistry = userRegistry;

        this.saveUser();
    }

    newUser(userName, completeName, email, password, registration) {
        this.userData[uNome] = userName;
        this.userData[uNomeCompleto] = completeName;
        this.userData[uEmail] = email;
        this.userData[uSenha] = password;
        this.userData[aMatricula] = registration;

        firebase.salvarUsuario(this.userData);
    }

    updateUser(completeName='', email='', password='', registration='') {
        this.userData[uNomeCompleto] = (completeName === '') ? this.userData.uNomeCompleto : completeName;
        this.userData[uEmail] = (email === '') ? this.userData.uEmail : email;
        this.userData[uSenha] = (password === '') ? this.userData.uSenha : password;
        this.userData[aMatricula] = (registration === '') ? this.userData.aMatricula : registration;

        firebase.salvarUsuario(this.userData);
    }

    userLogin(userName, password) {
        let oPassword;
        firebase.obterSenhaUsuario(userName, (senhaO) => {oPassword = senhaO});

        if (oPassword === password) {
            firebase.obterInfoUsuario(userName, (userInfo) => {this.userData = userInfo});
            this.userData[uNome] = userName;

            return true;
        } else {
            return false;
        }
    }
}

export default User;