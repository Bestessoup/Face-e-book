//YOUR FIREBASE LINKS
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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hrs>";

row = name_with_tag + message_with_tag + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });

  document.getElementById("msg").value ="";
}

function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes);

  firebase.database().ref(room_name).child(message_id).update({
    like : updated_likes
  });
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("kwitter.html");
}



