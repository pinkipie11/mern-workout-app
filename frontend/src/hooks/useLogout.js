import { useAuthContext } from './useAuthContext';

// logout - we dont need to send req to the backend. Update the global state changing it by dispatching a 'LOGOUT' action, and deleting jwt in local storage.
export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user');

    // dispatch logout action
    dispatch({ type: 'LOGOUT' });
  };

  return { logout };
};
