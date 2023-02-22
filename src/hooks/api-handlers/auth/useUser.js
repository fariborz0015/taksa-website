import React, { useContext } from 'react';
import { UserDataContext } from 'src/providers/auth/UserProvider';

const useUser = () => {
  const { user, setUser } = useContext(UserDataContext);

  return {
    user,
    setUser: (params) => setUser((prev) => ({ ...prev, ...params })),
    resetUser: setUser,
  };
};

export default useUser;
