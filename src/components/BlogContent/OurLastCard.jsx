


export const OurLastCard = (props) => {
    return (
        <div key={props.id} className='cols3'>
            <img className='foton' src={props.img} alt="" />
            <p className='text-products'>{props.title}</p>
            <p className='Aboutword'>
                {props.text}
            </p>
            <p className='reademore'>
                Read More...
            </p>

        </div>
    )
}