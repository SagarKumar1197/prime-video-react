import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
const firebaseConfig = {
	apiKey: 'AIzaSyAMF0ASE0CiUDJO6KiZBssSRK-L08CG5hc',
	authDomain: 'prime-video-69b1d.firebaseapp.com',
	databaseURL: 'https://prime-video-69b1d.firebaseio.com',
	projectId: 'prime-video-69b1d',
	storageBucket: 'prime-video-69b1d.appspot.com',
	messagingSenderId: '206900507339',
	appId: '1:206900507339:web:8a2c9c14f83c4df1f8214e',
};

firebase.initializeApp(firebaseConfig);
export default firebase;
