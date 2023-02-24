function Info(props){
    return (
        <div>
            <img src={props.image}/>
            <h5>{props.title}</h5>
            <p>{props.text}</p>
        </div>
    )
}

export default Info