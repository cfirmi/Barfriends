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

var ref = firebase.database().ref('messages');
ref.on('value', gotResponse, errResponse);

function gotResponse(data) {
    var messages = data.val();
    var keys = Object.keys(messages);
    for ( var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var fname = messages[k].fname;
        var lname = messages[k].lname;
        var email = messages[k].email;
        var subject = messages[k].subject;
        var message = messages[k].response;
        // console.log(fname, lname, email, subject, message);

        var li = createElement('li', fname + ' ' + lname);
        li.parent('messageList');
       
    }
}

function errResponse(err) {
    console.log('Err.');
    console.log(err)
}



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
    document.querySelector('.submit').style.display = 'none';
    document.querySelector('.alert').style.display = 'block';

    // Hide Alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
        document.querySelector('.submit').style.display = 'inline';
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
