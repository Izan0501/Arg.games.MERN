import React from 'react'

export const NavHeader = (props) => {
    return (
        <li>
            <a href="#">
                {props.content}
            </a>
        </li>

    );
};

export default NavHeader
