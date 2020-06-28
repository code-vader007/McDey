import axios from 'axios';

const instance =axios.create({
    
    baseURL:'https://mcdey-007.firebaseio.com/'
});

export default instance;