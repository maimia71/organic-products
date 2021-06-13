import './WelcomeBody.css';
import Bowel from '../../assets/bowel.png';
import ColorBowel from '../../assets/color_bowel.png';


function WelcomeBody() {
    return (
        <div className='welcomebody'>
            <div className='welcomebody__card'>
                <img src={Bowel} alt='not found' />
            </div>
            <div className='welcomebody__card'>
                <img src={ColorBowel} alt='not found' />
            </div>
            <div className='welcomebody__card'>
                <img src={Bowel} alt='not found' />
            </div>
            <div className='welcomebody__card'>
                <img src={Bowel} alt='not found' />
            </div>
        </div>
    )
}

export default WelcomeBody;