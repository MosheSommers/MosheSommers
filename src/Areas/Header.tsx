import React from 'react';
import { SharedStyles } from '../SharedStyles';

interface HeaderProps{
    setHeaderHeight:(height:number) => void //used to send height ot be used to position other elements
}

export const Header = (props:HeaderProps) => {
    const ref:React.LegacyRef<HTMLDivElement> = React.useRef(null);
    //After loading get height to set main content under header
    React.useEffect(() => { props.setHeaderHeight(ref?.current?.clientHeight ?? 0) }, [ref?.current])
    return <div ref={ref} className={SharedStyles.HeaderFooder(true)}>Header</div>;
}