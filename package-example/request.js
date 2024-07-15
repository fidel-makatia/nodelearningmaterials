const axios = require('axios');

axios.get('https://www.youtube.com')
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log('Request completed');
    });