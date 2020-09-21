import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile104559Navigator from '../features/UserProfile104559/navigator';
import Tutorial104558Navigator from '../features/Tutorial104558/navigator';
import NotificationList104530Navigator from '../features/NotificationList104530/navigator';
import Settings104529Navigator from '../features/Settings104529/navigator';
import Settings104521Navigator from '../features/Settings104521/navigator';
import UserProfile104519Navigator from '../features/UserProfile104519/navigator';
import SignIn12104497Navigator from '../features/SignIn12104497/navigator';
import SignIn23104496Navigator from '../features/SignIn23104496/navigator';
import SignIn45104494Navigator from '../features/SignIn45104494/navigator';
import SignIn56104493Navigator from '../features/SignIn56104493/navigator';
import BlankScreen0104492Navigator from '../features/BlankScreen0104492/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile104559: { screen: UserProfile104559Navigator },
Tutorial104558: { screen: Tutorial104558Navigator },
NotificationList104530: { screen: NotificationList104530Navigator },
Settings104529: { screen: Settings104529Navigator },
Settings104521: { screen: Settings104521Navigator },
UserProfile104519: { screen: UserProfile104519Navigator },
SignIn12104497: { screen: SignIn12104497Navigator },
SignIn23104496: { screen: SignIn23104496Navigator },
SignIn45104494: { screen: SignIn45104494Navigator },
SignIn56104493: { screen: SignIn56104493Navigator },
BlankScreen0104492: { screen: BlankScreen0104492Navigator },

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
