import React from 'react'
import {Header} from './components'
import app_style from './styles/appStyle'
import {MainContainer} from './containers'


function App() {
  return (
    <div className='App' style={app_style}>
      <Header title='Dog Show Show'/>
      <MainContainer/>
    </div>
  );
}

export default App;
