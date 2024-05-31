// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import{
    getFirestore,
    getDocs,
    collection
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional */}
const firebaseConfig = {
  apiKey: "AIzaSyBcr4fgYReexQuTTz0grHiWiJVkLtjiIEk",
  authDomain: "sujin-fca75.firebaseapp.com",
  projectId: "sujin-fca75",
  storageBucket: "sujin-fca75.appspot.com",
  messagingSenderId: "892555636282",
  appId: "1:892555636282:web:a0986e167378a9ad1a0f03",
  measurementId: "G-7R09ZBQC7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const db = getFirestore(app); {/* 실제 데이터 베이스가 나옴  */}
{/* const analytics = getAnalytics(app); */}
    /* 전체 회원 가져오기 */  
    //function getMember(){
    async function getMember(){
        //collection 명 작성 
        const collect = await collection(db,'member');
        const snapshot = await getDocs(collect);
        snapshot.forEach(doc => {
            // 원하는 형태로 추출 - doc.data();
            doc.data();
            console.log(doc.data());
        });
        // const snapshot = getDocs(collection(db,"member"));
        console.log(snapshot);
    }
    


export { db , getMember };
