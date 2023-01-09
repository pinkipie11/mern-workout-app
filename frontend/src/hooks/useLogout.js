import { useAuthContext } from './useAuthContext';
import { useWorkoutsContext } from './useWorkoutsContext';

// logout - we dont need to send req to the backend. Update the global state changing it by dispatching a 'LOGOUT' action, and deleting jwt in local storage.
export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: dispatchWorkouts } = useWorkoutsContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user');

    // dispatch logout action
    dispatch({ type: 'LOGOUT' });
    dispatchWorkouts({ type: 'SET_WORKOUTS', payload: null });
  };

  return { logout };
};
