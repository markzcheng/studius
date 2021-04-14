import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDmox4XYht1qAt3K285i1xbPTdgkxYAk-Y",
    authDomain: "studius-765b2.firebaseapp.com",
    projectId: "studius-765b2",
    storageBucket: "studius-765b2.appspot.com",
    messagingSenderId: "227062068351",
    appId: "1:227062068351:web:45648899ea765781c7bb4a",
    measurementId: "G-D4QGFKS8EN"
};

/* Firebase auth */
const app = firebase.initializeApp(firebaseConfig);

export default app;