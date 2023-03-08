 import firebase from 'firebase';
 
 var firebaseConfig = {
  apiKey: "AIzaSyAwaVBOQnIsZsl8XrLFqYHhzQnaWHwIXOE",
  authDomain: "moviebookingapp-b5e62.firebaseapp.com",
  projectId: "moviebookingapp-b5e62",
  storageBucket: "moviebookingapp-b5e62.appspot.com",
  messagingSenderId: "360860614066",
  appId: "1:360860614066:web:a190b6b056e876a7c238ab"
  };
  // Initialize Firebase
   var fire = firebase.initializeApp(firebaseConfig);

   export default fire;