import './Card.css';

function Card({ image }) {
    return (
        <div className='card'>
            <img src={image} alt='not found' />
            <h4>Blog Post One</h4>
            <div className='card__paragraph'>
                <p> Lorem ipsum dolor sit amet, consectetur adicpisching alit, sed do eiusmod.</p>
            </div>

            <p>Read More</p>
            <div style={{ borderBottom: '3px solid #00DBD0', width: '40px', height: '40px', margin: '0 auto' }}></div>
        </div>
    );
}

export default Card;

