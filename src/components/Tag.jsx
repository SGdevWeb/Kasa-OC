import './Tag.css'

function Tag(props) {
  return (
    <div className='tagContainer'>
        {props.tags.map((element => (
            <div key={`${element}-${props.id}`} className='tag'>
                {element}
            </div>
        )))}
    </div>
  )
}

export default Tag;
