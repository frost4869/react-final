import FireBase from "../helpers/firebase";
import { AsyncStorage } from "react-native";

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
                    const imageQuality = 'q_auto:good'
                    const imagePreUrl = `http://res.cloudinary.com/debwqzo2g/image/upload/${imageQuality}/`;
                    const imageFormat = '.jpg';
                    const fullImagePath = imagePreUrl + value.imageUrl + imageFormat;
                    images.push({
                        id: image.key,
                        description: value.description,
                        time: value.time,
                        timestamp: value.timestamp,
                        imageUrl: fullImagePath,
                        userId: value.userId,
                        type: 'image'
                    })
                })
                resolve(images);
            });
    })
}

export function fetchStories() {

    return new Promise((resolve, reject) => {
        firebase
            .database()
            .ref("stories")
            .orderByChild("time")
            .on("value", snapshot => {
                var stories = [];
                snapshot.forEach(item => {
                    stories.push({
                        id: item.val(),
                        userId: item.val().userId,
                        username: item.val().username,
                        avatar: item.val().avatar,
                        time: item.val().time,
                        message: item.val().message
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
                        imageUrl: item.val().imageUrl
                    });
                });
                resolve(events)
            });
    })
}
