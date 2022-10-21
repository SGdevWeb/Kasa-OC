import './Rating.css'

function Rating(props) {

    const starNumber = (ratingNumber) => {
        let star = []
        for (let i=0; i < 5; i++) {
            const rating = parseInt(ratingNumber)
            if (i < rating) {
                star.push(<i key={i} className="fa-solid fa-star"></i>)
            } else {
                star.push(<i key={i} style={{color: '#E3E3E3'}} className="fa-solid fa-star"></i>)
            }
        }
        return star
    }

  return (
    <div className='ratingContainer'>{starNumber(props.lodgingRating)}</div>
  )
}

export default Rating;