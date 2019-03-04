const url = 'https://ipfs.infura.io:5001/api/v0/add';

export const uploadImage = async imgFileData => {
    let options = {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        method: 'POST'
    };
    options.body = new FormData();
    for (let key in imgFileData) {
        options.body.append(key, data[key]);
    }

    const response = await fetch(url, options);
    const responseJson = await response.json();
    return responseJson['Hash'];
};