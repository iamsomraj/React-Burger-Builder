import Axios from 'axios';

let instance = Axios.create({
  baseURL: 'https://burger-builder-3efd4.firebaseio.com/'
});

export default instance;
