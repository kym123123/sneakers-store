import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './module/index';
import Product from './screen/Product';
import Cart from './screen/Cart';
import Thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(Thunk)),
);
const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Product">
          <Stack.Screen
            name="Product"
            component={Product}
            options={{ title: 'Product' }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{
              title: '로그인',
              headerStyle: {
                backgroundColor: '#1c4f70',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 18,
                paddingBottom: 13,
                paddingTop: 14,
                color: '#fefefe',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
