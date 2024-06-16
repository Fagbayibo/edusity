import './Title.css'
import PropTypes from 'prop-types'

const Title = (props) => {
    return (
        <div className='Title'>
            <p>{props.subheading}</p>
            <h2>{props.heading}</h2>
        </div>
    )
}

Title.propTypes = {
    subheading: PropTypes.string,
    heading: PropTypes.string
}


export default Title