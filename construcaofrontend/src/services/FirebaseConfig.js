import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBVcdAD4breJr2SC2CfyJ3WTlJfKhKE_ts",
    authDomain: "back-react-a6c06.firebaseapp.com",
    projectId: "back-react-a6c06",
    storageBucket: "back-react-a6c06.appspot.com",
    messagingSenderId: "77655602484",
    appId: "1:77655602484:web:ef3dbfbb79b4de6a6aa161"
};

const app = initializeApp(firebaseConfig);

export { app }