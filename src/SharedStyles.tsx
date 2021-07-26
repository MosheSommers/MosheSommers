import { css } from '@emotion/css';

export const SharedStyles = {
    HeaderFooder:(header?:boolean) => css`
        width:100%;
        position:fixed;
        ${header ? `top` : `bottom`}:0;
        background-color:#fff;
    `,
}