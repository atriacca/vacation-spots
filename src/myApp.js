import React from "react"
//import ReactDOM from "react-dom"

import vacationSpots from "/vacationSpots"
import Card from "/Card"

const App = () => {
    const vacationComponents = vacationSpots.map(item => <Card key={item._id} spot={item}/>)

    const styles = {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridRowHeight: "200px",
      textAlign: "center",
    }
    return (
      <div>
          {vacationComponents}
      </div>
    );
  }
  
  export default App