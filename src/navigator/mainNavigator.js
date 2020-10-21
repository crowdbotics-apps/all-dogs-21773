import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial152253Navigator from '../features/Tutorial152253/navigator';
import UserProfile152252Navigator from '../features/UserProfile152252/navigator';
import Maps152225Navigator from '../features/Maps152225/navigator';
import Add-Item152224Navigator from '../features/Add-Item152224/navigator';
import Maps152220Navigator from '../features/Maps152220/navigator';
import UserProfile152216Navigator from '../features/UserProfile152216/navigator';
import SignIn51152193Navigator from '../features/SignIn51152193/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial152253: { screen: Tutorial152253Navigator },
UserProfile152252: { screen: UserProfile152252Navigator },
Maps152225: { screen: Maps152225Navigator },
Add-Item152224: { screen: Add-Item152224Navigator },
Maps152220: { screen: Maps152220Navigator },
UserProfile152216: { screen: UserProfile152216Navigator },
SignIn51152193: { screen: SignIn51152193Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
