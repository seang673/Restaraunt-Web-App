import React from 'react';
import "/Users/seang/CouseraProj/my-app/src/App.css";
import three from "/Users/seang/CouseraProj/my-app/src/Images/three stars.png";
import four from "/Users/seang/CouseraProj/my-app/src/Images/four stars.png";
import five from "/Users/seang/CouseraProj/my-app/src/Images/five stars.jpg";
import profile from "/Users/seang/CouseraProj/my-app/src/Images/profile.png";


const Testimonials = () => {
  return (
    <testimonials>


     <div class="testimonials-container">

        <div class="grid-item">
            <h1>Customer Reviews</h1>
        </div>


        <div class = 'testimonials-item1'>
            <img src={three} alt="three stars" width="200" height="90"></img>
            <div class ="mini-testimonials-item">
                <img src={profile} alt="Profile Pic" width="50" height="50"></img>
                <p>Sean</p>
            </div>
            <pre>"The pizza was delicious, as <br></br>it had the right amount of cheese<br></br>
                and great tomato sauce distribution."
            </pre>
        </div>

        <div class="testimonials-item2">
        <img src={four} alt="four stars" width="200" height="90"></img>
            <div class ="mini-testimonials-item">
                <img src={profile} alt="Profile Pic" width="50" height="50"></img>
                <p>Michael</p>

            </div>
            <pre>"The rich and delightful chocolate<br></br> dessert was <br></br>a great conclusion
                to our meal."
            </pre>
        </div>

        <div class="testimonials-item3">
        <img src={five} alt="five stars" id="Profile-Pic" width="200" height="80"></img>
            <div class ="mini-testimonials-item">
                <img src={profile} alt="Profile Pic" width="50" height="50"></img>
                <p>Jacqueline</p>
            </div>
            <pre>"The sushi was both deliciously<br></br> fresh and visually <br></br>appealing."
            </pre>
        </div>

        <div class="testimonials-item4">
        <img src={four} alt="four stars" id="star-rating" width="200" height="90"></img>
            <div class ="mini-testimonials-item">
                <img src={profile} alt="Profile Pic" width="50" height="50"></img>
                <p>Robin</p>
            </div>
            <pre>"The pasta dish was tasty and <br></br>filling, with a generous<br></br> poriton size."
            </pre>
        </div>

      </div>
    </testimonials>
  );
};

export default Testimonials;