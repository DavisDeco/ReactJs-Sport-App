import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBjcZ1itEt7ynrYgUCUM_hHDqB8f8haOHI",
    authDomain: "nba-full-49d0f.firebaseapp.com",
    databaseURL: "https://nba-full-49d0f.firebaseio.com",
    projectId: "nba-full-49d0f",
    storageBucket: "nba-full-49d0f.appspot.com",
    messagingSenderId: "750638150730",
    appId: "1:750638150730:web:796ef60bfa1341f2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //
  const firebaseDB = firebase.database();
  //
  const firebaseArticles = firebaseDB.ref('articles');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebaseVideos = firebaseDB.ref('videos');

  // function to fetch any type of results
  const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach( (childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        })
    });
    return data
  }

  //
  export{
      firebase,
      firebaseDB,
      firebaseArticles,
      firebaseTeams,
      firebaseVideos,
      firebaseLooper
      
  }