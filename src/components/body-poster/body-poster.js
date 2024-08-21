import React from "react";
import './body-poster.css';

function BodyPosterOne() {
  return (
    <div>
<div className="bodyPosterOne">
<div id="carouselExampleControls" class="carousel slide slide-background " data-ride="carousel">
  <div class="carousel-inner ">
    <div class="carousel-item active ">
      <div class=" img-background-tv" src="" alt="First slide">
      <div className="para-div">
            <div >
            <p className="para-slide">Hurry up! <br /> American FastFood<br/> Everyday</p>
            </div>
            <div>
                <p className="para-slide-two">Powerful Steam Eliminates Stains without Pre-treatment<br/>Super Speed. Wash a full load in 40 minutes </p>
                <button type="button" class="btn btn-primary">Get It Now</button>
            </div>
        </div>

      </div>
      
    </div>
    <div class="carousel-item">
    <div class=" img-background-washing" src="" alt="First slide">
    <div className="para-div">
            <div >
            <p className="para-slide">Hurry up! <br /> American FastFood<br/> Everyday</p>
            </div>
            <div>
                <p className="para-slide-two">Powerful Steam Eliminates Stains without Pre-treatment<br/>Super Speed. Wash a full load in 40 minutes </p>
                <button type="button" class="btn btn-primary">Get It Now</button>
            </div>
        </div>

    </div>
      
    </div>
    <div class="carousel-item">
    <div class="img-background-snacks" src="" alt="First slide">
        <div className="para-div">
            <div >
            <p className="para-slide">Hurry up! <br /> American FastFood<br/> Everyday</p>
            </div>
            <div>
                <p className="para-slide-two">Powerful Steam Eliminates Stains without Pre-treatment<br/>Super Speed. Wash a full load in 40 minutes </p>
                <button type="button" class="btn btn-primary">Get It Now</button>
            </div>
        </div>
    </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


{/* second div */}

<div className="second-div">
    <div className="image-items-headphone">
        <p className="para-featured">Featured Products</p>
        <p className="para-big-sale">Big Sale Up To 40% Off</p>
        <p className="para-items-type">Laptop, Tablet & Accessories</p>
    </div>
    <div className="image-items-wires">
        <p className="para-featured">Featured Products</p>
        <p className="para-big-sale">Big Sale Up To 40% Off</p>
        <p className="para-items-type">Laptop, Tablet & Accessories</p>
    </div>
    <div className="image-items-watch">
        <p className="para-featured">Featured Products</p>
        <p className="para-big-sale">Big Sale Up To 40% Off</p>
        <p className="para-items-type">Laptop, Tablet & Accessories</p>
    </div>
</div>

</div>

<div className="thrid-div">
    <div className="thrid-inside-div">
        <div>
        <img src="https://static.vecteezy.com/system/resources/previews/012/744/228/original/rocket-outline-icon-free-vector.jpg" className="rocket-image"/>
        </div>
        <div className="para-details-type">
        <span className="para-support">Free Shipping</span><br/>
        <span className="para-small">Free Shipping On All Order</span>
        </div>
    </div>
    <div className="thrid-inside-div">
    <div>
        <img src="https://cdn.icon-icons.com/icons2/3870/PNG/512/refresh_icon_243600.png" className="refresh-image"/>
    </div>
    <div className="para-details-type">
        <span className="para-support">Free Shipping</span><br/>
        <span className="para-small">Free Shipping On All Order</span>
        </div>
    </div>    
    <div className="thrid-inside-div">
        <div>
        <img src="https://icon-library.com/images/contacts-icon/contacts-icon-0.jpg" className="refresh-image"/>
        </div>
        <div className="para-details-type">
        <span className="para-support">Free Shipping</span><br/>
        <span className="para-small">Free Shipping On All Order</span>
        </div>
    </div> 
    <div className="thrid-inside-div">
        <div>
        <img src="https://tse2.mm.bing.net/th?id=OIP.exgnPG1E0PJQrNpOn1jjBQHaHa&pid=Api&P=0&h=180" className="rocket-image"/>
        </div>
        <div className="para-details-type">
        <span className="para-support">Free Shipping</span><br/>
        <span className="para-small">Free Shipping On All Order</span>
        </div>
    </div> 
</div>

</div>


);
}


export default BodyPosterOne;
