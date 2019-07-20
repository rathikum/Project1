import React from 'react';
import { createAppContainer, createStackNavigator} from 'react-navigation';
import HomeComponent from './screens/home/homeComponent';
import Pagination from './screens/pagination/paginationComponent';
import MapScreen from './screens/search/searchComponent';
import parkInfoComponent from './screens/parkInfo/parkInfoComponent';
import parkHoursComponent from './screens/parkHours';
import parkLocationComponent from './screens/parkLocation'

const AppNavigator = createStackNavigator({
        Home: {
            screen : HomeComponent,
            navigationOptions: {
                header: null,
              }
        },
        Pagination: {
            screen : Pagination,
            navigationOptions: {
                header: null,
              }
        },
        Map:{
            screen : MapScreen,
            navigationOptions: {
                header: null,
              }
        },
        ParkInfo:{
            screen : parkInfoComponent,
            navigationOptions: {
                header: null,
              }
        },
        ParkHours:{
            screen : parkHoursComponent,
            navigationOptions: {
                header: null,
              }
        },
        ParkLocation:{
            screen : parkLocationComponent,
            navigationOptions: {
                header: null,
              }
        },
    }, {
        initialRouteName: 'Home'
    });

    export default createAppContainer(AppNavigator);