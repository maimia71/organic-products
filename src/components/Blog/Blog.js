import './Blog.css';
import Leaf from '../../assets/leaf.png';
import Card from './Card';
import Soap from '../../assets/organic_soap.png';
import Oil from '../../assets/organic_oil.png';
import HandWash from '../../assets/organic_handwash.png';

function Blog() {
    return (
        <div className='blog'>
            <div className='blog__header'>
                <img src={Leaf} alt='not found' />
                <p style={{ fontSize: '2.25rem' }}>Read Our Blog</p>
            </div>

            <div className='blog__paragraph'>
                <p>Lorem ipsum dolor sit amet, consectur adicpisching elit, sed do eiusmod tempor</p>
                <p>incident ut labore et dolore magna aliqua.</p>
            </div>


            <div className='blog__cards'>
                <Card image={Soap} />
                <Card image={Oil} />
                <Card image={HandWash} />
            </div>
        </div>
    )
}

export default Blog;