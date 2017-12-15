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

	// Add login event
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

	// Add signup event
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

	// // btnLogout.addEventListener('click', e => {
	// // 	firebase.auth().signOut();
	// // });

	// Add a realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (firebaseUser) {
			console.log(firebaseUser);
		}
		else {
			console.log('not logged in');
		}
	});

});

