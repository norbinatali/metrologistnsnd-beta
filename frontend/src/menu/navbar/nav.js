import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-scroll';
import i18n from "../translation/i18n";


const Nav = ({ index, item, offset, duration, delay, moveNavs, width, linkClass, activeLinkClass }) => {
    const liStyle = {
        width: 156,
        height: "100%",

    };
    return (
        <li style={liStyle}>
<Link
                className={linkClass}
                activeClass={activeLinkClass}
                to={item.target}
                spy={true}
                smooth={true}
                offset={offset}
                duration={duration}
                isDynamic={true}
                delay={delay}>
                {item.label}
</Link>

        </li>

    )
};

Nav.propTypes = {
    index: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
    offset: PropTypes.number,
    duration: PropTypes.number,
    delay: PropTypes.number,
    moveNavs: PropTypes.func,
    width: PropTypes.number,
    linkClass: PropTypes.string,
    activeLinkClass: PropTypes.string
}

export default Nav;