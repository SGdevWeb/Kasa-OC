import './Tag.css'

function Tag(props) {
  return (
    <div className='tagContainer'>
        {props.tags.map((element => (
            <div className='tag'>
                {element}
            </div>
        )))}
    </div>
  )
}

export default Tag;
