import React from "react";
import './style.css';

import Card from "./Card";

const App = () => {

  const styles = {
    fontFamily: "sans-serif",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridRowHeight: "200px",
    textAlign: "center",
  }
  return (
    <div>
      <div style={styles}>
        <Card 
          _id= "vac0001"
          place="New England"
          price= "600"
          timeToGo= "Fall"
        />
        <Card 
          _id= "vac0002"
          place="Portugal"
          price= "900"
          timeToGo= "Summer"
          />
        <Card 
          _id= "vac0003"
          place="Hawaii"
          price= "1000"
          timeToGo= "Anytime"
        />
        <Card 
          _id= "vac0004"
          place="Cancun"
          price= "900"
          timeToGo= "Winter"
        />
        <Card 
          _id= "vac0005"
          place="Australia"
          price= "1300"
          timeToGo= "Winter"
        />
        <Card 
          _id= "vac0006"
          place="Lebanon"
          price= "400"
          timeToGo= "Spring"
        />
        <Card 
          _id= "vac0007"
          place="Russia"
          price= "1100"
          timeToGo= "Summer"
        />
        <Card 
          _id= "vac0008"
          place="China"
          price= "1200"
          timeToGo= "Fall"
        />
        <Card 
          _id= "vac0009"
          place="Meridian, Idaho"
          price= "40"
          timeToGo= "Spring"
        />
        </div>
    </div>
  );
}

export default App;