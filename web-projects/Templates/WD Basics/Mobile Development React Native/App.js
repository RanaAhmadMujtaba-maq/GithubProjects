import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import HomeScreen from './src/Screens/HomeScreen';
import FlatScreen from './src/Screens/FlatScreen';
import ImgScreen from './src/Screens/ImgScreen';
import AssignmentSreen from './src/Screens/AssignmentScreen';
import AssignmentImageSreen from './src/Screens/AssignmentImageScreen';
import StateManagement from './src/Screens/StateManagement';
import SquareScreen from './src/Screens/SquareScreen';
import SearchScreen from './src/Screens/SearchScreen';
import SignUp from './src/Screens/SignUp';
import LoginScreen from './src/Screens/LoginScreen';
import MainScreen from './src/Screens/MainScreen';
import DisplayData from './src/Screens/DisplayData';

const navigator = createStackNavigator(
{
	Home: HomeScreen,
	Flat: FlatScreen,
	Image: ImgScreen,
	Assignment : AssignmentSreen,
	AssignmentImage : AssignmentImageSreen,
	StateManagement : StateManagement,
	SquareScreen : SquareScreen,
	search : SearchScreen,
	signup: SignUp,
	LoginScreen:LoginScreen,
	MainScreen:MainScreen,
	DisplayData:DisplayData
	
},
{
	initialRouteName: "Home"
}

);
export default createAppContainer(navigator);

