import './Welcome.css';
import Leaf from '../../assets/leaf.png';
import WelcomeBody from './WelcomeBody';

function Welcome() {
    return (
        <div className='welcome'>
            <img src={Leaf} alt="not found" />
            <p>Welcome to Nature</p>

            <div className='welcome__paragraph'>
                <p>Lorem ipsum dolor sit amet, consectutur adicpisching elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>


            <div className='welcome__body'>
                <WelcomeBody />
                
            </div>
        </div>
    )
}

export default Welcome;