import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
    <div>
    <div class="container text-muted">
    <div class="row">
      <div class="col-md-12">
        <h1 class="display-5 text-center mt-4">Shop Club</h1>
       
       <nav class="nav nav-pills nav-fill">
          <a class="nav-item nav-link active  ml-1 mr-1" href="#live-events" data-toggle="tab">Electronics</a>
          <a class="nav-item nav-link active  ml-1 mr-1" href="#upcoming-events" data-toggle="tab">TV & Appliances</a>
          <a class="nav-item nav-link active  ml-1 mr-1" href="#hackathons" data-toggle="tab">Men</a>
          <a class="nav-item nav-link active  ml-1 mr-1" href="#hackathons" data-toggle="tab">Women</a>
          <a class="nav-item nav-link active  ml-1 mr-1" href="#hackathons" data-toggle="tab">Kids</a>
        </nav>
      </div>
     </div>
   </div>
<br/>

   
<div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://rukminim1.flixcart.com/flap/844/140/image/5cc28c4d102b1334.jpg?q=50" alt="First slide"/>
    </div>
  
  </div>
  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<br/>
		<div class="row">
				<div class="col-lg-1"></div>

				<div class="col-lg-3">
					<div class="card">

   						<img class="card-img-top" src="https://rukminim1.flixcart.com/image/300/300/iron/z/g/y/inalsa-oscar-original-imaehgceykzzwg9w.jpeg?q=70 " alt="Card image cap" />
  						<div class="card-body">
    							<h5 class="card-title">Inalsa oscar Steam iron     <i class="far fa-star"></i></h5>
    							<p class="card-text" id="time">Only on<br/>$20</p>
    							<a href="#" class="btn btn-primary">Shop Now</a>
  						</div>
					</div>

				</div>


				<div class="col-lg-1"></div>

				<div class="col-lg-3">
					<div class="card" >

   						<img class="card-img-top" src=" https://rukminim1.flixcart.com/image/300/300/perfume/9/u/y/eau-de-parfum-fogg-100-scent-bautyfull-secret-original-imaed5xhrz7vepvw.jpeg?q=70" alt="Card image cap" height="228px;"/>
  						<div class="card-body"><br/>
    							<h5 class="card-title">Perfumes   <i class="far fa-star"></i></h5>
    							<p class="card-text" id="time">Only on<br/>$22</p>
    							<a href="#" class="btn btn-primary">Shop Now</a>
  						</div>
					</div>
				</div>

  	


		<div class="col-l"></div>	
	
				<div class="col-lg-3">
					<div class="card">

   						<img class="card-img-top" src="https://rukminim1.flixcart.com/image/300/300/jgy0fbk0/speaker/home-audio-speaker/y/k/t/jvc-xs-xn15-original-imaf52qrhkgygb8g.jpeg?q=70" alt="Card image cap" height="250px;"/>
  						<div class="card-body">
    							<h5 class="card-title"> Headphones and speakers  <i class="far fa-star"></i></h5>
    							<p class="card-text" id="time">Only on <br/>$14</p>
    							<a href="#" class="btn btn-primary">Shop Now</a>
  						</div>
					</div>

				</div>
           </div>
       

	</div>
	    );
  }
}

export default 
Product;
