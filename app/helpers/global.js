import firebase from "./firebase";

global.firebase = firebase;

global.user = {
  id: "user01",
  avatar: require('../assets/male.png'),
  username: "Anthony"
};

global.partner = {
  id: "user02",
  avatar: require('../assets/female.jpg'),
  username: "Monica"
};

// global.partner = {
//   id: "user01",
//   avatar: require('../assets/male.png'),
//   username: "Anthony"
// };

// global.user = {
//   id: "user02",
//   avatar: require('../assets/female.jpg'),
//   username: "Monica"
// };
