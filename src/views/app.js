// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBDfZ-IFjK5ChWjJYl1H7RR7hDCRTFVa40",
    authDomain: "wildo42.firebaseapp.com",
    databaseURL: "https://wildo42.firebaseio.com",
    projectId: "wildo42",
    storageBucket: "wildo42.appspot.com",
    messagingSenderId: "1031842663150",
    appId: "1:1031842663150:web:8690276e9222730bea41ff"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Refernece contactInfo collections
  let contactInfo = firebase.database().ref("infos");
  
  // Listen for a submit
  document.querySelector(".contact-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    //   Get input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    console.log(name, email, message);
  
    saveContactInfo(name, email, message);
  
    document.querySelector(".contact-form").reset();
  }
  
  // Save infos to Firebase
  function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      name: name,
      email: email,
      message: message,
    });
  }