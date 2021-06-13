import './PresentedBody.css';

function PresentedBody(props){
    return(
        <div className='container'>
            <img src={props.image}  alt='not found'/>
        </div>
    )
}

export default PresentedBody;