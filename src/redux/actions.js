/* eslint-disable prettier/prettier */
import axios from 'axios';
import {NavigationActions} from 'react-navigation';
export const GET_POSTS = 'GET_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const CREATE_LOGIN = 'CREATE_LOGIN';
export const LOGOUT = 'LOGOUT';
const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = () => {
  try {
    return async dispatch => {
      const res = await axios.get(`${BASE_URL}/posts`);
      if (res.data) {
        dispatch({
          type: GET_POSTS,
          payload: res.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const createPost = ({title, description}) => {
  try {
    return async dispatch => {
      const res = await axios.post(`${BASE_URL}/posts`, {
        title: title,
        body: description,
      });
      if (res.data) {
        dispatch({
          type: CREATE_POST,
          payload: res.data,
        });
      } else {
        console.log('Unable to create');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const createLogin = ({email, password}) => {
  try {
    return async dispatch => {
      const res = await axios.get(`${BASE_URL}/users/?email=${email}`);
      if (res.data.length > 0) {
        console.log('logintrue', res.data);
        dispatch({
          type: CREATE_LOGIN,
          payload: true,
        });
      } else {
        alert('Invalid Credentials');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
export const logOut = () => {
  try {
    return async dispatch => {
      dispatch({
        type: LOGOUT,
        payload: false,
      });
    };
  } catch (error) {
    console.log(error);
  }
};
