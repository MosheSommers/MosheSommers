import { css } from '@emotion/css';

export const SharedStyles = {
    HeaderFooder:(header?:boolean) => css`
        width:100%;
        position:fixed;
        ${header ? `top` : `bottom`}:0;
        background-color:${Colors.BackGround};
    `,
}

export const Colors = {
    Text :'#777a7f',
    BackGround:'#ccade1',
    Background2:'#777a7f',
    White:'#fff',
  }