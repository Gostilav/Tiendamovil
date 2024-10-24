import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js';
import { getFirestore, collection, addDoc, getDocs, setDoc, getDoc, doc } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js';

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA1w3gq0z-1-j7HauR-I6FefuQICtgAeSg",
    authDomain: "htmlnubefinal.firebaseapp.com",
    projectId: "htmlnubefinal",
    storageBucket: "htmlnubefinal.appspot.com",
    messagingSenderId: "623203090522",
    appId: "1:623203090522:web:eded4a0cdf52da30c79863",
    measurementId: "G-DGLDRSX42W"
  };
  

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Funciones de autenticación
export const ctrlaccessuser = (email, password) => 
    signInWithEmailAndPassword(auth, email, password);

// Guardar un registro en Firestore (colección 'cities')
export const Setregister = (codigo, name, country) => 
    setDoc(doc(db, "cities", codigo), {
        codigo,
        name,
        country
    });

// Leer un registro específico de Firestore (colección 'cities')
export const Getregister = (codigo) => 
    getDoc(doc(db, "cities", codigo));

// Guardar un registro en Firestore (colección 'estados')
export const save_url = (codigo, name, country, urlcountry) => 
    setDoc(doc(db, "estados", codigo), {
        codigo,
        name,
        country,
        urlcountry
    });

// Leer un registro específico de Firestore (colección 'estados')
export const Search_register = (codigo) => 
    getDoc(doc(db, "estados", codigo));

// Subir imagen a Firebase Storage y obtener su URL
export const archivoimg = async (file, referencia) => {
    const storageref = ref(storage, `Paisimg/${referencia + file.name}`);
    await uploadBytes(storageref, file);
    const url = await getDownloadURL(storageref);
    return url;
};
