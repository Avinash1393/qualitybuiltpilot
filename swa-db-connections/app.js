const axios = require('axios');

// Replace with the URL of your JSON file
const jsonFileUrl = 'https://github.com/abhishek-kumar7007/qualitybuiltpilot/tree/main/swa-db-connections';

axios.get(jsonFileUrl)
  .then((response) => {
    const jsonData = response.data;
    console.log('JSON Data:', jsonData);
  })
  .catch((error) => {
    console.error('Error fetching JSON:', error);
  });
