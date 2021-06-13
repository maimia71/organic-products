import './Footer.css';
import CopyrightLogo from '../../assets/copyright_logo.PNG';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';

function Footer() {
    return (
        <div className='footer'>

            <div className='footer__container'>

                <div className='footer__copyright'>

                    <div className='footer__copyright__upper'>
                        <img src={CopyrightLogo} alt='not found' />
                        <h4> <strong>Organic</strong> </h4>
                    </div>

                    <div className='footer__copyright__middle'>
                        <p>Lorem ipsum dolor sit amet, consectutur adicpisching elit, sed eiusmod tempor</p>
                    </div>

                    <div style={{ borderBottom: '3px solid #00DBD0', width: '100px', height: '40px' }}></div>

                    <div className='footer__copyright__lower'>
                        <p>
                            <strong>© Copyright 2020 Nature</strong>
                        </p>
                    </div>

                </div>

                <div className='footer__information'>
                    <p>
                        <strong>Information</strong>
                        <div style={{ borderBottom: '3px solid #00DBD0', width: '50px', height: '10px' }}></div>
                        <div style={{ marginTop: '20px' }}>
                            <p>About Us</p>
                            <p>Products</p>
                            <p>Contact Us</p>
                            <p>Terms of service</p>
                        </div>

                    </p>
                </div>

                <div className='footer__links' style={{ marginTop: '55px' }}>
                    <p>About Us</p>
                    <p>Products</p>
                </div>

                <div className='footer__socials'>
                    <strong>Follow Us</strong>
                    <div style={{ borderBottom: '3px solid #00DBD0', width: '50px', height: '10px' }}></div>
                    <div className='footer__socials__icons' style={{marginTop:'20px', justifyContent:'space-between'}}>
                        <img src={Facebook} alt='not found' />
                        <img src={Instagram} alt='not found' />
                        <img src={LinkedIn} alt='not found' />

                    </div>
                </div>

            </div>

            <div style={{margin:'0 auto',textAlign:'center'}} className='signature'>
                <p> <strong>Made By Himanshu</strong></p>
            </div>

        </div>
    )
}

export default Footer;