const firebaseConfig = {
      apiKey: "AIzaSyCve-ipYdvCfeuwdGm4KbYxcZTQtSqW_1A",
      authDomain: "kwitter-3dd03.firebaseapp.com",
      databaseURL: "https://kwitter-3dd03-default-rtdb.firebaseio.com",
      projectId: "kwitter-3dd03",
      storageBucket: "kwitter-3dd03.appspot.com",
      messagingSenderId: "325635888067",
      appId: "1:325635888067:web:08e0896c7dff9c98776376"
    };
firebase.initializeApp(firebaseConfig);
User_Name= localStorage.getItem("SaveUsername");
room_name= localStorage.getItem("SaveRoomName")
function SEND(){
      message= document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            Saveusername: User_Name, 
            SaveMessage: message,
            like: 0
      })
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
getData();
