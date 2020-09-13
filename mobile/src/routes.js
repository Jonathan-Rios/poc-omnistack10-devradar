import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({ // Todas as pages aqui recebem o props para ser chamada (ex: navigation)
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'DevRadar'
            },
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no Github'
            }
        },
    }, {
        defaultNavigationOptions: {
            headerBackTitleVisible: false, // No IOS apareceu no "voltar" o nome da página anterior, isso remove.
            headerTintColor: '#FFF',
            headerStyle: {
                backgroundColor: '#7D40E7',
            }
        }
    })
);

export default Routes;
