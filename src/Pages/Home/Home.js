import './Home.css';
import React, { useRef } from 'react';
import ScrollNavbar from '../../Components/scroll-navigation/Scroll';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

const sectionArr = [
    { name: "Projects", Icon: <ApiOutlinedIcon /> },
    { name: "Skills", Icon: <AutoAwesomeOutlinedIcon /> },
];

function Home() {

    const refs = useRef(sectionArr.map(() => React.createRef()));

    return (
        <>
            <ScrollNavbar sectionsArr = { sectionArr } ref = { refs } />
            <div className="home-content">
                <div className="section"  ref={ refs.current[0] }>
                    <h3><ApiOutlinedIcon /> Projects</h3>
                    <p>
                        📍 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec euismod.
                    </p>
                    <p>
                        📍 Quisque eget dignissim dolor. In sed nibh sed ipsum pulvinar eleifend ut eget mauris.
                    </p>
                    <p>
                        📍 Nulla euismod, nisl eget consectetur sagittis, nisl nisi consectetur nisl, euismod.
                    </p>
                    <p>
                        📍 urabitur sed volutpat sapien, dignissim tristique tortor. Proin a enim sed erat posuere sodales.
                    </p>
                    <p>
                        📍 Vestibulum sem tellus, sodales interdum ullamcorper vitae.
                    </p>
                </div>
                <div className="section" ref={ refs.current[1] }>
                    <h3><AutoAwesomeOutlinedIcon /> Skills</h3>
                    <p>
                        📕 React
                    </p>
                    <p>
                        📗 React Native
                    </p>
                    <p>
                        📘 Node.js
                    </p>
                    <p>
                        📜 PostgreSQL
                    </p>
                    <p>
                        📝 Git
                    </p>
                    <p>
                        🔖 GitHub
                    </p>
                    <p>
                        📟 GitLab
                    </p>
                </div>
            </div>
        </>
    );
}

export default Home;