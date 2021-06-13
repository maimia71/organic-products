import './Testimonial.css';
import Comma from '../../assets/comma.png';
import User from '../../assets/user.png';
import { FiStar } from 'react-icons/fi';
import LeftDesign from '../../assets/left_design.png';

function Testimonial() {
    return (
        <div className='testimonial' style={{ position: 'relative' }}>

            <div style={{ position: 'absolute' }}>
                <img src={LeftDesign} alt='not found' />
            </div>

            <img src={Comma} alt='not found' />
            <div className='testimonial__info'>
                <img src={User} alt='not found' />
                <p>Jane Doe</p>
            </div>
            <div className='user__rating'>
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
            </div>

            <div className='testimonial__quote'>
                <p>Thank you for all the amazing produce and products you deliver each week...</p>
                <p>you make life so easy an bring goodness into our family eating.</p>
                <p>I've been roasting a lot of brussel sprouts and</p>
            </div>

            <div className='subscribe'>

                <p id='subscribe__header'>Subscribe to our Newsletter</p>

                <p> Lorem ipsum dolor sit amet consectetur adispiscing elit, sed do eiusmod tempor.</p>
                <p> incididunt ut labore et dolore magna aliqua</p>


                <div className='subscribe__input'>
                    <input type='text' placeholder='Enter your email address' />
                    <button type='button'>Subscribe</button>
                </div>

            </div>

        </div>
    )
}

export default Testimonial;