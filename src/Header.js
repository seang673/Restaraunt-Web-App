
import React from 'react';
import "../src/styles.css";

import bruschetta from "../src/Images/headerimg.jpg";

const header = () => {
    return (
        <header>
        <div class = "header-container">
            <div class="grid-item">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaraunt,
                    focused <br></br>on traditional recipes served with a modern
                    twist.</p>
            </div>

            <div class="grid-item">
                <img src= {bruschetta} alt="Bruschetta" width="300" length="300"></img>

            </div>

        </div>
        </header>
    );

};
export default header;