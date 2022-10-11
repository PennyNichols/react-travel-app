function ImageCard(props) {
    return (
      <div className="p-3 city" key={props.data.id}>
        <h4 className='title'>{props.data.title}</h4>
        <img className="image" src={props.data.image} alt={props.data.title} />
        <p className="hideText">{props.data.desc}</p>
      </div>
    )
  }
  
  export default ImageCard;
  