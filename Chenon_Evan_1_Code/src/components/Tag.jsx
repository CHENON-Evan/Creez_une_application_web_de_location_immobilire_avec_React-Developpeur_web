import '../styles/Tag.css'

const Tag = (props) => {
    return (
        <div className="tag">
            <p className='tag__name'>
            {props.tag}
            </p>
        </div>
    )
}

export default Tag;