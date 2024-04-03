import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import MainStackNavigator from '@modules/navigation/MainStackNavigator';
import AuthenticationStackNavigator from './AuthenticationStackNavigator';

function ApplicationNavigator() {
  const {theme} = useSelector(state => state.ThemeReducer);
  const {loggedIn} = useSelector(state => state.UserReducer);

  return (
    <NavigationContainer>
      {loggedIn ? <MainStackNavigator /> : <AuthenticationStackNavigator />}
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
