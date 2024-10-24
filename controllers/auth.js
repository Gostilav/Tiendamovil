import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js';


const firebaseConfig = {
    apiKey: "AIzaSyA1w3gq0z-1-j7HauR-I6FefuQICtgAeSg",
    authDomain: "htmlnubefinal.firebaseapp.com",
    storageBucket: "htmlnubefinal.appspot.com",
    messagingSenderId: "623203090522",
    appId: "1:623203090522:web:eded4a0cdf52da30c79863",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;

                    
                    if (user.email === 'admin@gmail.com') {
                        window.location.href = 'main_admi.html'; 
                    } else {
                        window.location.href = 'main_user.html'; 
                    }
                })
                .catch((error) => {
                    document.getElementById('error-message').textContent = 'Error: ' + error.message;
                });
        });
    }

   
    const logoutButton = document.getElementById('btnlogout');
    
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            signOut(auth).then(() => {
                window.location.href = 'index.html'; 
            }).catch((error) => {
                console.error('Error al cerrar sesión:', error);
            });
        });
    }
});
