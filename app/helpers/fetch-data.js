import FireBase from "../helpers/firebase";
import { AsyncStorage } from "react-native";

const imageQuality = 'q_auto:good/';
const thumbnail = 'q_auto:eco/';
const imagePreUrl = `http://res.cloudinary.com/debwqzo2g/image/upload/`;
const imageFormat = '.jpg';
const iconPath = '../assest/icons/';


export function fetchUser01Info() {
    return new Promise((resolve, reject) => {
        FireBase.database()
            .ref("users/user01")
            .on("value", snapshot => {
                let user = snapshot.val();
                resolve(user)
            })
    })
}

export function fetchUser02Info() {
    return new Promise((resolve, reject) => {
        FireBase.database()
            .ref("users/user02")
            .on("value", snapshot => {
                let user = snapshot.val();
                resolve(user)
            })
    })
}

export function fetchCoupleInfo() {
    return new Promise((resolve, reject) => {
        FireBase.database()
            .ref("couple_info")
            .on("value", snapshot => {
                resolve(snapshot.val().start_date)
            })
    })
}

export function fetchImages() {
    return new Promise((resolve, reject) => {
        let images = []

        FireBase.database()
            .ref("images")
            .orderByChild("time")
            .on("value", snapshot => {
                snapshot.forEach((image) => {
                    let value = image.val();

                    const thumbnailPath = imagePreUrl + thumbnail + value.imageUrl + imageFormat;
                    const fullImagePath = imagePreUrl + imageQuality + value.imageUrl + imageFormat;

                    let username = '';
                    let avatar = '';
                    if (value.userId == 'user001') {
                        username = 'Anthony';
                        avatar = require('../assets/male.png')
                    }else{
                        username = 'Monica';
                        avatar = require('../assets/female.jpg')
                    }

                    images.push({
                        id: image.key,
                        description: value.description,
                        time: value.time,
                        timestamp: value.timestamp,
                        imageUrl: fullImagePath,
                        thumbnail: thumbnailPath,
                        username,
                        avatar,
                        type: 'image',
                        icon: require('../assets/icons/hearts.png')
                    })
                })
                resolve(images);
            });
    })
}

export function fetchStories() {

    return new Promise((resolve, reject) => {
        FireBase
            .database()
            .ref("stories")
            .orderByChild("time")
            .on("value", snapshot => {
                var stories = [];
                snapshot.forEach(item => {
                    let username = '';
                    let avatar = '';
                    if (item.val().userId == 'user001') {
                        username = 'Anthony';
                        avatar = require('../assets/male.png')
                    }else{
                        username = 'Monica';
                        avatar = require('../assets/female.jpg')
                    }
                    stories.push({
                        id: item.val(),
                        userId: item.val().userId,
                        username,
                        avatar,
                        timestamp: item.val().timestamp,
                        message: item.val().message,
                        type: 'story',
                        icon: require('../assets/icons/hearts.png')
                    });
                });
                resolve(stories)
            });
    })
}

export function fetchEvents() {
    return new Promise((resolve, reject) => {
        firebase
            .database()
            .ref("events")
            .orderByChild("time")
            .on("value", snapshot => {
                var events = [];
                snapshot.forEach(item => {
                    events.push({
                        id: item.key,
                        title: item.val().title,
                        time: item.val().time,
                        timestamp: item.val().timestamp,
                        description: item.val().description,
                        imageUrl: item.val().imageUrl,
                        type: 'event'
                    });
                });
                resolve(events)
            });
    })
}
