import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile152363Navigator from '../features/UserProfile152363/navigator';
import Settings152361Navigator from '../features/Settings152361/navigator';
import Settings152353Navigator from '../features/Settings152353/navigator';
import NotificationList152352Navigator from '../features/NotificationList152352/navigator';
import Tutorial152324Navigator from '../features/Tutorial152324/navigator';
import UserProfile152323Navigator from '../features/UserProfile152323/navigator';
import UserProfile152292Navigator from '../features/UserProfile152292/navigator';
import Settings152290Navigator from '../features/Settings152290/navigator';
import Settings152282Navigator from '../features/Settings152282/navigator';
import NotificationList152281Navigator from '../features/NotificationList152281/navigator';
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
UserProfile152363: { screen: UserProfile152363Navigator },
Settings152361: { screen: Settings152361Navigator },
Settings152353: { screen: Settings152353Navigator },
NotificationList152352: { screen: NotificationList152352Navigator },
Tutorial152324: { screen: Tutorial152324Navigator },
UserProfile152323: { screen: UserProfile152323Navigator },
UserProfile152292: { screen: UserProfile152292Navigator },
Settings152290: { screen: Settings152290Navigator },
Settings152282: { screen: Settings152282Navigator },
NotificationList152281: { screen: NotificationList152281Navigator },
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
