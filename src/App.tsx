import { css } from '@emotion/css';
import React from 'react';
import * as Areas from './Areas/Areas';

function App() {

  //Used to move content and sidebar under fixed header
  const [headerHeight, setHeaderHeight]:[number, React.Dispatch<React.SetStateAction<number>>] = React.useState(0)
  return (
    <div>
      <Areas.Header setHeaderHeight={setHeaderHeight}/>
      <div className={Styles.MainContainer(headerHeight)}>
        <Areas.SideBar />
        <Areas.Content />
      </div>
      <Areas.Footer />
    </div>
  );
}

export default App;


const Styles = {
  MainContainer:(headerHeight:number)=> css`
      margin-top:${headerHeight}px;
      display:flex;
      gap:14px;
  `
}