import React from 'react'
import UserContainer from './store/containers/UserContainer'

import {createStore} from 'redux'
import user from './store/reducers/user'
// import reducers from './reducers'
import {Provider} from 'react-redux'
import {NavigationContainer} from '@react-navigation/native'

const userStore = createStore(user)

const App = () => {
    return (
        <NavigationContainer>
            <UserContainer />
        </NavigationContainer>

        // <Provider store={{userStore}}>
        //     <NavigationContainer>
        //         <UserContainer />
        //     </NavigationContainer>
        // </Provider>
    )
}

export default App
