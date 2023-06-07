import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const createPerson = (obj) => {
  const request = axios.post(baseUrl, obj);
  return request.then((response) => response.data);
};

const removePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then().catch((error) => {
    console.log('failed');
  });
};

export default {
  getAll,
  createPerson,
  removePerson,
};
