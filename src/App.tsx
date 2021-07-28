import { css } from '@emotion/css';
import React from 'react';
import * as Areas from './Areas/Areas';
import { Colors } from './SharedStyles';

function App() {

  //Used to move content and sidebar under fixed header
  const [headerHeight, setHeaderHeight]:[number, React.Dispatch<React.SetStateAction<number>>] = React.useState(0)
  return (
    <div className={Styles.App()}>
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
  App:() =>css`
    margin:10px;
    color:${Colors.Text};
  `,
  MainContainer:(headerHeight:number)=> css`
      margin-top:${headerHeight}px;
      display:flex;
      gap:14px;
  `
}