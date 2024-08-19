import React from 'react';
import "../src/styles.css";
import gs from "../src/Images/Greek-Salad.jpg";
import brus from "../src/Images/bruschetta.jpg";
import lemonc from "../src/Images/LemonCake.jpg";


const Highlights = () => {
    return (
      <body>
        <h1>This weeks specials!</h1>
        <div name="three-container">
            <div name= "grid-item">
                <img src={gs} alt="Greek Salad" width="150" length="150"></img>
            </div>

            <div name= "grid-item">
                <img src={brus} alt="Bruschetta" width="150" length="150"></img>
            </div>

            <div name= "grid-item">
                <img src={lemonc} alt="Lemon Cake" width="150" length="150"></img>
            </div>

        </div>
      </body>
    )
  };

  export default Highlights;



