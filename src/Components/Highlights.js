import React from 'react';
import "/Users/seang/CouseraProj/my-app/src/App.css";
import gs from "/Users/seang/CouseraProj/my-app/src/Images/Greek-Salad.jpg";
import brus from "/Users/seang/CouseraProj/my-app/src/Images/bruschetta.jpg";
import lemonc from "/Users/seang/CouseraProj/my-app/src/Images/LemonCake.jpg";


const Highlights = () => {
    return (
      <body>

        <div class="highlights-container">
          <div class="grid-item">
            <h1>This weeks specials!</h1>
        </div>

            <div class= "highlights-item1">
                <img src={gs} alt="Greek Salad" width="150" height="150"></img>
                <h3>Greek Salad</h3>
                <p>The famous greek salad of crispy lettuce, peppers, olives,
                  and our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.</p>
            </div>

            <div class= "highlights-item2">
                <img src={brus} alt="Bruschetta" width="150" height="150"></img>
                <h3>Bruschetta</h3>
                <p>
                Our Bruchetta is made from grilled bread that has been smeared with
                garlic and seasoned with salt and olive oil.
                </p>
            </div>

            <div class= "highlights-item3">
                <img src={lemonc} alt="Lemon Cake" width="150" height="150"></img>
                <h3>Lemon Cake</h3>
                <p>This comes straight from grandma’s recipe book, every last ingredient
                  has been sourced and is as authentic as can be imagined.</p>
            </div>

        </div>
      </body>
    )
  };

  export default Highlights;



