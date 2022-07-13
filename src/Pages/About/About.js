import './About.css';
import React, { useRef } from 'react';
import ScrollNavbar from '../../Components/scroll-navigation/Scroll';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const sectionArr = [
    { name: "About", Icon: <AutoFixHighOutlinedIcon /> },
    { name: "Contact", Icon: <PhoneOutlinedIcon /> },
    { name: "Location", Icon: <LocationOnOutlinedIcon /> }
]

function About() {

    const refs = useRef(sectionArr.map(() => React.createRef()));

    return (
        <>
        <ScrollNavbar sectionsArr = { sectionArr } ref = { refs } />
        <div className="about-content">
            <div className="section" ref={ refs.current[0] }>
                <h3><AutoFixHighOutlinedIcon /> About</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque eget dignissim dolor. In sed nibh sed ipsum pulvinar eleifend ut eget mauris.
                Aliquam a mi dapibus, bibendum elit nec, volutpat felis. Praesent eu elementum libero.
                Duis mattis ac neque quis pharetra. Phasellus eget ullamcorper arcu, et molestie nulla.
                Curabitur sed volutpat sapien, dignissim tristique tortor. Proin a enim sed erat posuere sodales. Vestibulum sem tellus, sodales interdum ullamcorper vitae, mollis sagittis lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer accumsan lorem in magna aliquam bibendum.
                </p>
            </div>
            <div className="section" ref={ refs.current[1] }>
                <h3><PhoneOutlinedIcon /> Contact</h3>
                <p>
                    Phone: (123) 456-7890
                </p>
                <p>
                    Email: anon@myspace.com
                </p>
            </div>
            <div className="section" ref={ refs.current[2] }>
                <h3><LocationOnOutlinedIcon /> Location</h3>
                <p>
                    Address: 123 Main St.
                </p>
                <p>
                    City: New York
                </p>
                <p>
                    State: NY
                </p>
                <p>
                    Zip: 10001
                </p>
            </div>
        </div>
        </>
    );
}

export default About;