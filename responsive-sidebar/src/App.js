import React,{useState} from 'react';

import Toolbar from './component/Toolbar/Toolbar';
import SideDrawer from './component/SideDrawer/SideDrawer';
import Backdrop from './component/Backdrop/Backdrop';

const  App =()=> {
  const [sideDrawerOpen, setSideDrawer] = useState(false);

  const drawerToggleClickHandler = () =>{
    setSideDrawer(!sideDrawerOpen)
  }

  const backdropClickHandler = () =>{
    setSideDrawer(false)
  }


  let backdrop;

  if(sideDrawerOpen){
    backdrop =<Backdrop click={backdropClickHandler}/>
  }

  return (
    <div style={{height: '100%'}}>
      <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen}/>
      {backdrop}
      <main style={{marginTop: '63px'}}>
        <p>This is the page content!</p>
      </main>

    </div>

  );
}

export default App;
