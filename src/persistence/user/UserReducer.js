import {createSlice} from '@reduxjs/toolkit';

const UserReducer = createSlice({
  name: 'user',
  initialState: {
    loggedIn: false,
  },
  reducers: {
    signInSuccess(state, {payload}) {
      state.loggedIn = true;
    },
    signUpSuccess(state, {payload}) {
      state.loggedIn = true;
    },
    signOutSuccess(state, {payload}) {
      state.loggedIn = false;
    },
  },
});
// Extract the action creators object and the reducer
const {actions, reducer} = UserReducer;
// Extract and export each action creator by name
export const {signInSuccess, signUpSuccess, signOutSuccess} = actions;
// Export the reducer, either as a default or named export
export default reducer;
