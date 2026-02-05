import { initializeApp } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAoVH8wQ2ofolAaJYdFnu1COcwI-xvaNnM",
  authDomain: "panel-proyectos-f119f.firebaseapp.com",
  projectId: "panel-proyectos-f119f",
  storageBucket: "panel-proyectos-f119f.firebasestorage.app",
  messagingSenderId: "780366850885",
  appId: "1:780366850885:web:fa282efbac6b3b51dcec2c",
  measurementId: "G-RV3YHXWQ0J"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
