const firebaseConfig = {
  apiKey: "AIzaSyCeVWDpimDD_7nCBA94ocG7p0Oi9l424_0",
  authDomain: "face-e-book-1c541.firebaseapp.com",
  databaseURL: "https://face-e-book-1c541-default-rtdb.firebaseio.com",
  projectId: "face-e-book-1c541",
  storageBucket: "face-e-book-1c541.appspot.com",
  messagingSenderId: "239686650928",
  appId: "1:239686650928:web:22fc1d5d81e15124a7f1f5",
  measurementId: "G-7Q5V3LY0GZ"
};

// Initialize Firebase
InitializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
    });});}
getData();

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}



