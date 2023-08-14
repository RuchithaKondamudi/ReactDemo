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

// export const updateUserPassword = async (userId: any, newPassword: any) => {
//   try {
//     const response = await axios.put(`http://localhost:4001/users/${userId}`, {
//       password: newPassword
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error updating user password:', error);
//     throw error;
//   }
