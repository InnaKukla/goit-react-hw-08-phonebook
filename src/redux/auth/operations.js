import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token){
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(token){
    axios.defaults.headers.common.Authorization = '';
  }
};

export const registrationUser = createAsyncThunk(
    'auth/register',
    async (registerData, thunkApi) => {
      try {
        const response = await axios.post('users/signup', registerData);
        token.set(response.data.token)
        return response.data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );
  
  export const logInUser = createAsyncThunk(
    'auth/login',
    async (loginData, thunkApi) => {
      try {
        const response = await axios.post('users/login', loginData);
        token.set(response.data.token)
        return response.data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );

  export const logOutUser = createAsyncThunk(
    'auth/logout',
    async (_, thunkApi) => {
      try {
        await axios.post('users/logout');
        token.unset();
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );


  export const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue();
      }
  
      token.set(persistedToken);
      try {
        const response = await axios.get('/users/current');
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    },
  );