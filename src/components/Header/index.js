import React, { useState } from 'react';
import {btn_setting_style,header_style,title_style} from './style';
import { FiSettings } from 'react-icons/fi';
const Header = (props) => {

    return <header style={header_style}>
        <h1 style={title_style}>
            {props.title}
        </h1>
    </header>
}



export default Header;