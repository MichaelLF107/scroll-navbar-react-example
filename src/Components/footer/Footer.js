import './Footer.css';
import Github from '../../Icons/github.svg';
import LinkedIn from '../../Icons/linkedin.svg';

function Footer() {

    function redirectToGithub() {
        window.location.href = "https://github.com/MichaelLF107"
    }

    function redirectToLinkedIn() {
        window.location.href = "https://www.linkedin.com/in/michael-lanius-friedrich-415428231/"
    }

    return (
        <div className="footer">
            <div className="footer-item">
                <p>
                    Made with ❤️ by Michael
                </p>
            </div>
            <div className="footer-item">
                <div className="footer-item-icon" onClick={ redirectToGithub }>
                    <img src={ Github } alt="Github" />
                </div>
                <div className="footer-item-icon" onClick={ redirectToLinkedIn }>
                    <img src={ LinkedIn } alt="LinkedIn" />
                </div>
            </div>
        </div>
    );
}

export default Footer;