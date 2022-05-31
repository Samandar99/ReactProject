export const BlogCard = (props) => {
    
    return (

        <div className='info'>
            <img className='iconr' src={props.image} alt="" />
            <p className='words23'>{props.title}</p>
            <p className='words22'> {props.description} </p>
        </div>
    )
}