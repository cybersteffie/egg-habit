import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyD4VDIoP9WGyjbA8Mt4sQc5FEynYj46rYI',
  authDomain: 'egg-habit.firebaseapp.com',
  databaseURL: 'https://egg-habit.firebaseio.com',
  projectId: 'egg-habit',
  storageBucket: 'egg-habit.appspot.com',
  messagingSenderId: '168044196353',
  appId: '1:168044196353:web:eb260ea52d837f2aa98600',
  measurementId: 'G-DNM06MJ67W'
}

firebase.initializeApp(config)
