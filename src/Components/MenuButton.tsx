import { css } from '@emotion/css';
import { SyntheticEvent } from 'react';
import { Colors } from '../SharedStyles';

export interface MenuButtonProps{
    label:string;
    onClick:(e:SyntheticEvent)=>void;
}

export const MenuButton = (props:MenuButtonProps) => <div className={Styles.MenuButton()} onClick={props.onClick}>{props.label}</div>;

const Styles = {
    MenuButton:() => css`
      padding:10px;
      &:hover{
          color:${Colors.White};
          background-color:${Colors.Background2};
      }  
    `
}