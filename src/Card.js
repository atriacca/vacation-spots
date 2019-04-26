import React from "react";

const Card = (props) => {
    let bgColor
    switch(props.spot.timeToGo) {
        case "Spring":
        bgColor = "lightgreen"
        break
        case "Summer":
        bgColor="goldenrod"
        break
        case "Fall":
        bgColor="orange"
        break
        case "Winter":
        bgColor="lightblue"
        break
        default:
        bgColor="violet"
    }
    let dollar 
    if (props.spot.price < 499.9) {
        dollar = "$"
    } else if  (props.spot.price > 499.9 && props.spot.price < 1000.1) {
        dollar = "$$"
    } else {
        dollar = "$$$"
    }
    const styles = {
        div: {
            border: "solid green 5px",
            padding: "10px",
            margin: "10px",
            backgroundColor: bgColor
        }
    }

    return (
      <div style={styles.div}>
          <h2>{props.spot.place}</h2>
          <img width="200px" src={props.spot.imgUrl} alt="photo not rendered"/>
          <p>{props.spot.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
          <p>{props.spot.timeToGo}</p>
          <p>{dollar}</p>
      </div>
    )
}
      
export default Card;