import './Scroll.css';
import React, { forwardRef, useState } from 'react';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';

function ScrollNavbar({ sectionsArr }, ref) {

    const [showBar, setShowBar] = useState(false);

    function scrollToSection(i) {
        if (ref.current[i]?.current.scrollIntoView) {
            ref.current[i].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    return (
        <>
        { showBar ? (
        <div className="scroll-navbar">
            {sectionsArr.map((section, i) => (
                <div
                className = "scroll-navbar-item"
                onClick = { () => scrollToSection(i) }
                onKeyDown = { () => scrollToSection(i) }
                aria-hidden = "true">
                    <span className = "item-icon">{ section.Icon }</span>
                    <span>{ section.name }</span>
                </div>
            ))}
        </div>) : null }
        <div className="scroll-navbar-trigger" onClick={() => setShowBar(!showBar)}>
            { showBar ? <ArrowCircleUpOutlinedIcon className = "scroll-navbar-icon" /> : <ArrowCircleDownOutlinedIcon className = "scroll-navbar-icon" /> }
        </div>
        </>
    );
}

export default forwardRef(ScrollNavbar);