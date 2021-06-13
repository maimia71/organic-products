import './Presented.css';
import PresentedBody from './PresentedBody';
import SingleLeaf from '../../assets/single_leaf.png';
import GreenLogo from '../../assets/green_logo.png';
import Plant from '../../assets/plant.png';

function Presented() {
    return (
        <div className='presented'>

            <div className='header'>
                <p >Proudly presented by</p>
            </div>

            <div className='presented__paragraph'>
                <p>Lorem ipsum dolor sit amet consectetur adispiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className='presented__body'>
                <PresentedBody image={Plant} />
                <PresentedBody image={SingleLeaf} />
                <PresentedBody image={GreenLogo} />
                <PresentedBody image={SingleLeaf} />
                <PresentedBody image={Plant} />
            </div>

            <div className='slides'>
                <input type='radio'></input>
                <input type='radio'></input>
                <input type='radio'></input>
                <input type='radio'></input>
            </div>

        </div>
    );
}

export default Presented;