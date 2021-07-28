import React from 'react';
import { Menu } from '../Components/Menu';
import { MenuButtonProps } from '../Components/MenuButton';
import { SharedStyles } from '../SharedStyles';

interface HeaderProps{
    setHeaderHeight:(height:number) => void //used to send height ot be used to position other elements
}

const MenuButtons:MenuButtonProps[] = [
    {label : 'About', onClick:() => console.log('about')},
    {label : 'Blog', onClick:() => console.log('blog')},
    {label : 'Contact', onClick:() => console.log('contact')},
];

export const Header = (props:HeaderProps) => {
    const ref:React.LegacyRef<HTMLDivElement> = React.useRef(null);
    //After loading get height to set main content under header
    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useEffect(() => { props.setHeaderHeight(ref?.current?.clientHeight ?? 0) }, [ref?.current])
    return (
        <div ref={ref} className={SharedStyles.HeaderFooder(true)}>
            <Menu Buttons={MenuButtons} />
        </div>
    );
}