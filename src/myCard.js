import React from "react"
//          <img className="small" src={props.imgUrl} alt=""/>

const Card = (props) => {
    const styles = {
        div: {
            border: "solid blue 3px",
            padding: "10px",
            margin: "10px",
            backgroundColor: props.bgColor
        }
    }
    return (
      <div style={styles.div}>
          <h2>{props.place}</h2>
          <p>{props.price}</p>
          <p>{props.timeToGo}</p>
          <p>{props._id}</p>
      </div>
    )
}
      
export default Card