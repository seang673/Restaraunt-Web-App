import React from 'react';
import bruschetta from "/Users/seang/CouseraProj/my-app/src/Images/headerimg.jpg";
import {Link} from 'react-router-dom';


const header = () => {
    return (
        <header>
        <div class = "header-container">
            <div class="header-grid-item">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaraunt,
                    focused <br></br>on traditional recipes served with a modern
                    twist.</p>
                <Link to="/booking"><button aria-label='On Click'>Reserve Table</button></Link>
            </div>

            <div class="grid-item">
                <img src= {bruschetta} alt="Bruschetta" width="300" length="300"></img>

            </div>

        </div>
        </header>
    );

};
export default header;