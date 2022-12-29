import firebaseApp from '../firebase';

const LoginService = {
    Login: async function(email, password){
        const user = await firebaseApp.signIn(email, password);
        return user;
    }
}

export default LoginService;