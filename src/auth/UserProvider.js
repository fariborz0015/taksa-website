import BackEndReq from '@/service/Api';
import Cookies from 'js-cookie';
import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
 
import { getProfile } from '@/service/Requests';
export const UserDataContext = createContext(false);
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (user?.token) {
      Cookies.set('token', user.token);
    }
  }, [user]);

  useEffect(() => {
    if (Cookies.get('token')) {
      BackEndReq.setToken(Cookies.get('token'))
      if (user == false) {
        getProfile()
          .then((res) => {
            setUser(res?.data?.result?.data?.user);
          })
          .catch((err) => {
            setUser(false);
          });
      }
    }
  }, []);

  return <UserDataContext.Provider value={{ user, setUser }}>{children}</UserDataContext.Provider>;
};

export default UserProvider;
