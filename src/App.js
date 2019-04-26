import React from "react";
import './style.css';

import Card from "./Card";
import vacationSpots from "./vacationSpots";

const App = () => {
  const vacationComponents = vacationSpots.map(item => <Card key={item._id} spot={item}/>)

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
        {vacationComponents}
        </div>
    </div>
  );
}

export default App;