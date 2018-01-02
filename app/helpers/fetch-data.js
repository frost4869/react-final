import FireBase from "../helpers/firebase";

export function fetchImages() {
    return new Promise((resolve, reject) => {
        let images = []

        FireBase.database()
            .ref("images")
            .orderByChild("time")
            .on("value", snapshot => {
                snapshot.forEach((image) => {
                    let value = image.val();
                    images.push({
                        id: image.key,
                        description: value.description,
                        time: value.time,
                        timestamp: value.timestamp,
                        imageUrl: value.imageUrl,
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
