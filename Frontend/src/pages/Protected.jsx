import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginUserAsync,
  selectLoggedInUser,
} from './Authentication/Redux/AuthSlice';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import Loader from '../common/Loader';

const api = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
});

const Protected = ({ children }) => {
  const user = useSelector(selectLoggedInUser);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      if (!user) {
         const response = await axios.get('/api/auth/home');
         // Assume response.data.user contains the user information
         if (response.data.user) {
           await dispatch(
             loginUserAsync({
               email: response.data.user.email,
               password: response.data.user.password,
             }),
           );
         }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return <>{user ? children : <Navigate to="/auth/signin" replace={true} />}</>;
};

export default Protected;
