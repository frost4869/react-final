import firebase from "./firebase";

global.firebase = firebase;

global.user = {
  id: "user01",
  avatar:
    "https://relayfm.s3.amazonaws.com/uploads/user/avatar/4/user_avatar_mykehurley_artwork.png",
  username: "Anthony"
};

global.partner = {
  id: "user02",
  avatar: "http://endlesstheme.com/Perfect_Admin/img/user2.jpg",
  username: "Monica"
};

// global.partner = {
//   id: "user01",
//   avatar:
//     "https://relayfm.s3.amazonaws.com/uploads/user/avatar/4/user_avatar_mykehurley_artwork.png",
//   username: "Anthony"
// };

// global.user = {
//   id: "user02",
//   avatar: "http://endlesstheme.com/Perfect_Admin/img/user2.jpg",
//   username: "Monica"
// };
