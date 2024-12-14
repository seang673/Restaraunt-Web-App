import React from 'react';
import "/Users/seang/CouseraProj/my-app/src/App.css";
import rb from "/Users/seang/CouseraProj/my-app/src/Images/restarauntback.jpg";
import rf from "/Users/seang/CouseraProj/my-app/src/Images/restarauntfront.jpg";

const About = () => {
  return (
    <about>
      <div class="about-container">

            <div class="about-item1">
                <h1>Little Lemon</h1>

                <h2>Chicago</h2>
                <p>“Little Lemon” is a delightful neighborhood bistro <br></br>
                known for its simple, yet flavorful food and classic cocktails.<br></br>
                The restaurant offers a lively and casual atmosphere, featuring a<br></br>
                locally-sourced menu with daily specials. </p>
           </div>

            <div class="about-item2">

                    <div class="relative-container">

                        <div class="grid-item">
                            <img class="image1" src={rb} alt="restaraunt backdrop"></img>
                        </div>

                        <div class="grid-item">
                            <img class="image2" src={rf} alt="restaraunt worker"></img>
                        </div>

                    </div>
        </div>

    </div>





    </about>
  );
};

export default About;