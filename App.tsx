import React from 'react';
import { Provider } from 'react-redux';
import Content from './src/Content';
import store from './src/redux/store';



export default function App() {
  return (
    <Provider store={store}>
      <Content />
    </Provider>
  );
}



