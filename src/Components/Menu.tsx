import { css } from '@emotion/css';
import { Colors } from '../SharedStyles';
import { MenuButton, MenuButtonProps } from './MenuButton';

interface MenuProps{
    Buttons:MenuButtonProps[];
}

export const Menu = (props:MenuProps) => (
    <div className={Styles.Menu()}>{props.Buttons.map((ButtonProps, index) => <MenuButton key={index} {...ButtonProps}/>)}</div>
);

const Styles = {
    Menu:()=>css`
        display:flex;
        border-bottom:2px solid ${Colors.Background2};
        width: fit-content;
        margin: 10px 0;
    `
}