// Feel free to customize the given the array:

  // Use .map() and props to create multiple vacation <Cards />. Spend some time to design them well.
  
  // Extra Credit
  // Change the background color of your card depending on the timeToGo property.
  // Give each card 1, 2, or 3 dollar signs ($) depending on if it's less than $500, less than $1000, or more than $1000

  let bgColor = "yellow"

  switch(props.spot.timeToGo) {
      case "Spring":
      bgColor = "lightgreen"
      break
      case "Summer":
      bgColor="red"
      break
      case "Fall":
      bgColor="orange"
      break
      case "Winter":
      bgColor="lightblue"
      break
      case "Anytime":
      bgColor="red"
      break
  }
  if(props.spot.timeToGo === "Spring"){
      bgColor="lightgreen";
   } else if (props.spot.timeToGo === "Summer"){
      bgColor="red";
   } else if (props.spot.timeToGo === "Fall"){
      bgColor="orange";
   } else if (props.spot.timeToGo === "Winter"){
      bgColor="lightgray";
   } else {
      bgColor="lightblue";
   }