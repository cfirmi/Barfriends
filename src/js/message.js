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

  
var rootref = firebase.database().ref().child("messages");

rootref.on("child_added", snap => {
    var name = snap.child("name").val();
    var email = snap.child("email").val();
    var response = snap.child("response").val();
    var subject = snap.child("subject").val();

    $('#messageBoard').append("<div class='kitten'> <p class='userInfo'>" 
    + name + "</p> <p class='userInfo'>"
    + email + "</p> <p class='userInfo'>"
    + subject + "</p> <p class='userInfo subject'>" 
    + response + "</p> <br> <textarea class='center myResponse' name='response' placeholder='My response to you'></textarea> <i class='fa fa-times-circle' aria-hidden='true'></i> </div>" 
  
  );
});