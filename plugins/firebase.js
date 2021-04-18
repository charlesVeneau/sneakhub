import firebase from 'firebase'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyDLIVSnCUlKPPkhgZ1_b4ZR7XuLEaWUtJQ',
    authDomain: 'sneakhub-25a5e.firebaseapp.com',
    projectId: 'sneakhub-25a5e',
    storageBucket: 'sneakhub-25a5e.appspot.com',
    messagingSenderId: '484877558885',
    appId: '1:484877558885:web:09bad26babb70c69b3d28c',
    measurementId: 'G-XGN4GT11FM',
  }

  firebase.initializeApp(firebaseConfig)
  firebase.firestore().settings({ timestampsInSnapshots: true })
}

const fireDb = firebase.firestore()

export { fireDb }
