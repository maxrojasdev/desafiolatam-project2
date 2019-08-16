import axios from 'axios';

export const getUsers = async url => await axios.get(url);

export const getUser = async id =>
  await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);