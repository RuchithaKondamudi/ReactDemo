import axios from 'axios';

export const getUsers = async () => {
  try {
    const response = await axios.get('http://localhost:4000/users');
    const users = response.data;
    return users;
  } catch (error) {
    console.log('Error');
  }
};
