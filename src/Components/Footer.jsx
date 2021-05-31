import React from 'react';
import './Footer.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-content">
                    <h3>Janoni</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, sunt numquam. Assumenda repellat, quam ipsam dolore sint adipisci nam minus quas quibusdam dicta obcaecati officia, incidunt provident et esse omnis.</p>
                    <ul className="social">
                        <li><a href="#"> <MailOutlineIcon fontSize="large" /></a></li>
                        <li><a href="#"><YouTubeIcon fontSize="large" /></a></li>
                    </ul>
                </div>

                <div className="footer-bottom">
                    <p>copyright &copy;2020 Janoni</p>
                </div>
            </footer>
        </>
    );
}
export default Footer;