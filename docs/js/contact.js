  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyANOr0JoVFJs5eKoZ6Z4xoRAiX--2np9FI",
    authDomain: "barfriends-682ef.firebaseapp.com",
    databaseURL: "https://barfriends-682ef.firebaseio.com",
    projectId: "barfriends-682ef",
    storageBucket: "barfriends-682ef.appspot.com",
    messagingSenderId: "742411444110"
  };
  firebase.initializeApp(config);

//Reference Messages Collection

var messagesRef = firebase.database().ref('messages');


//Listen for form submit
document.getElementById('contactform').addEventListener('submit', submitForm);

//Submit Form
function submitForm(e) {
    e.preventDefault();
    //Get values 
    var fname = getInputVal('fname');
    var lname = getInputVal('lname');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var response = getInputVal('response');

    //Save Message
    saveMessage(fname, lname, email, subject ,response);

    //Show Alert
    document.querySelector('.alert').style.display = 'block';

    // Hide Alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    },2000);
    document.getElementById('contactform').reset();
}

//Function to get form values 
function getInputVal(id) {
    return document.getElementById(id).value;
}

//Save Message to Firebase
function saveMessage(fname, lname, email, subject, response) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        fname: fname,
        lname: lname,
        email: email,
        subject: subject,
        response: response
    });
}