import {createSlice} from '@reduxjs/toolkit';
import {Themes} from '@persistence/theme/data/theme';
import {applicationProperties} from '@src/application.properties';

const ThemeReducer = createSlice({
  name: 'theme',
  initialState: {
    theme: Themes[applicationProperties.defaultTheme.code],
    themes: applicationProperties.themes,
    defaultTheme: applicationProperties.defaultTheme,
  },
  reducers: {
    changeSuccess(state, {payload}) {
      state.theme = Themes[payload];
    },
    listSuccess(state, {payload}) {
      state.themes = payload;
    },
    changeDefaultSuccess(state, {payload}) {
      state.defaultTheme = payload;
      state.theme = Themes[payload.code];
    },
  },
});
// Extract the action creators object and the reducer
const {actions, reducer} = ThemeReducer;
// Extract and export each action creator by name
export const {changeSuccess, listSuccess, changeDefaultSuccess} = actions;
// Export the reducer, either as a default or named export
export default reducer;
