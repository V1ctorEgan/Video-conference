import React from 'react'
import VideoChat from './components/VideoChat';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import './styles.css'

// components
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';

const App = () => {
  return (
    <div className='vidse'>
       <AppBar position='static' color='inherit'>
       <Typography variant="h2" align="center">Video Chat</Typography>
       </AppBar>
       
       {/* <VideoChat /> */}
       <div className='vidse'>
       <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
       </div>

 
         
    </div>
  );
}

export default App;