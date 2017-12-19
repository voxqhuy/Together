"use strict";

$(document).ready(function() {
	// body...
	// Initialize Firebase
	var config1 = {
		apiKey: "AIzaSyB4OkQ7YqMHIvsFop93jME2TQoJAainsBQ",
	    authDomain: "together-cb.firebaseapp.com",
	    databaseURL: "https://together-cb.firebaseio.com",
	    projectId: "together-cb",
	    storageBucket: "together-cb.appspot.com",
	    messagingSenderId: "631052340251"
	};
	firebase.initializeApp(config1);

	// Get elements
	const emailInput = document.getElementById('email-input');
	const passwordInput = document.getElementById('password-input');
	const btnLogin = document.getElementById('btn-login');
	const btnSignup = document.getElementById('btn-signup');
	const btnForgotpw = document.getElementById('btn-forgotpw');
	const btnLogout = document.getElementById('btn-logout');
	const btnGoogleLogin = document.getElementById('btn-google-login');

	// Add login event
	if (btnLogin != null) {
		btnLogin.addEventListener('click', e => {
			// Get email and pass
			const email = emailInput.value;
			const pass = passwordInput.value;
			const auth = firebase.auth();

			// Sign in
			const promise = auth.signInWithEmailAndPassword(email, pass);
			promise
			.catch(e => console.log(e.message));
		});
	}

	// Add signup event
	if (btnSignup != null) {
		btnSignup.addEventListener('click', e => {
			// Get email and pass
			// TODO: CHECK FOR REAL EMAIL
			const email = emailInput.value;
			const pass = passwordInput.value;
			const auth = firebase.auth();
			// Sign in 
			const promise = auth.createUserWithEmailAndPassword(email, pass);
			promise
			.catch(e => console.log(e.message));
		});
	}

	// Add forgot pw even
	if (btnForgotpw != null) {
		btnForgotpw.addEventListener('click', e => {
			//TODO: do something
		});
	}

	// btnLogout.addEventListener('click', e => {
	// 	firebase.auth().signOut();
	// });

	// Add a realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (firebaseUser) {
			console.log(firebaseUser);

			// Load the user
			loadUser(firebaseUser);
		}
		else {
			console.log('not logged in');
		}
	});

	var provider = new firebase.auth.GoogleAuthProvider();
	// View user contacts
	provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
	provider.addScope('profile');
 	provider.addScope('email');
 	provider.addScope('https://www.googleapis.com/auth/plus.me');

	btnGoogleLogin.addEventListener('click', e => {
		firebase.auth().signInWithPopup(provider).then(function(result) {
		 	// This gives you a Google Access Token. You can use it to access the Google API.
		  	var token = result.credential.accessToken;
			// The signed-in user info.
			var user = result.user;
			// ...
		}).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// The email of the user's account used.
			var email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			var credential = error.credential;
			// ...
		});
	}) 
	// googleSignin() {
		
	//   // var profile = googleUser.getBasicProfile();
	//   // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
	//   // console.log('Name: ' + profile.getName());
	//   // console.log('Image URL: ' + profile.getImageUrl());
	//   // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
	// }

// 	<a href="#" onclick="signOut();">Sign out</a>
// <script>
//   function signOut() {
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//       console.log('User signed out.');
//     });
//   }
// </script>

});

function loadUser(user) {
	// name = user.displayName;
	// email = user.email;
	// photoUrl = user.photoURL;
	// emailVerified = user.emailVerified;
	// uid = user.uid;
	// console.log(name, email, photoUrl, emailVerified);

	goToHomePage();
}

function goToHomePage() {
	window.location.href = "../index.html";
}