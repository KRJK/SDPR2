//declare variables for postModal (uitlenen)
var artName = document.getElementById('artName');
var owner = document.getElementById('owner');
var pricePM = document.getElementById('pricePM');
var artFile = document.getElementById('artFile');

var submitBtn = document.getElementById('submitBtn');

//declare variables for slideshow (lenen)

//Database variable declarations
var rootRef = firebase.database().ref().child("novikunst");
// var storage = firebase.storage().ref().child("artImages");

var refArtName = firebase.database().ref().child('artNames');
var refOwners = firebase.database().ref().child('owners');
var refPricePM = firebase.database().ref().child('pricePM');
var refIncrement = firebase.database().ref().child('i');

var i = refIncrement.on('value', function(datasnapshot){
  i = datasnapshot.val();
});
var j = 0;

//function which submits the Art data to the database
function submitArtInfo(){

  if(i == null){
    i = -1;
  }
  i++;

  refArtName.child(i).set(artName.value);
  refOwners.child(i).set(owner.value);
  refPricePM.child(i).set(pricePM.value);
  refIncrement.set(i);

}

//retrieveArtInfo in lenen view
function retrieveArtInfo() {

  var owner = document.getElementById('owner');
  var artname = document.getElementById('artname');
  var price = document.getElementById('price');
  var articleNumber = document.getElementById('articleNumber');

  refOwners.child(j).on('value', snap => owner.innerText = "Eigenaar: " + snap.val());
  refArtName.child(j).on('value', snap => artname.innerText = "Naam van het kunstwerk: " + snap.val());
  refPricePM.child(j).on('value', snap => price.innerText = "Gewenste prijs: " + snap.val());
  refIncrement.child(j).on('value', snap => articleNumber.innerText = "Artikel nummer: " + j);

  if(j > i){
    j = -1;
  }

  j++;

}

//checks hardcoded login
function checkLogin() {

    var passwordInput = document.getElementById('password').value;
    var usernameInput = document.getElementById('username').value;
    var loginForm = document.getElementById("loginForm");

    if (
       usernameInput == "koen" && passwordInput == "test" ||
       usernameInput == "marco" && passwordInput == "test" ||
       usernameInput == "admin" && passwordInput == "test"
       ){
          loginForm.setAttribute('action',"home.html");
    }
    else
    {
          alert("wrong credentials");
         loginForm.setAttribute('action',"inloggen.html");
    }
}
