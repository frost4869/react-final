uploadImage = (uri_base64) => {
    return new Promise((resolve, reject) => {
        let keys = require('../assets/CLOUDINARY_KEY.json')
        let url = `https://api.cloudinary.com/v1_1/${keys.cloud_name}/image/upload`;
        let unsignedUploadPreset = 'vzrhkurc';

        let xhr = new XMLHttpRequest();
        let fd = new FormData();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

        xhr.onreadystatechange = (e) => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // File uploaded successfully
                let response = JSON.parse(xhr.responseText);
                console.log(response)
                let image_url = response.secure_url;
                resolve(image_url);
            } else {
                resolve({
                    error: JSON.parse(xhr.responseText)
                })
            }
        };

        fd.append('upload_preset', unsignedUploadPreset);
        fd.append('file', 'data:image/jpeg;base64,' + uri_base64);
        xhr.send(fd);
    })
}

export default uploadImage
