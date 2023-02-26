import React from 'react'

const Carousal = () => {
  return (
    <div id="carouselExampleControls" className="order-1 carousel slide w-full flex h-full bg-black justify-center" data-bs-ride="carousel">
        <div className='max-w-[1410px] justify-center flex w-full'>
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner  ">
      <div className="carousel-item active relative float-left w-full " data-bs-interval="1500">
        <img src="1.jpg" className="block w-full h-[450px] xsm:h-40" alt="..."/>
      </div>
      <div className="carousel-item  relative float-left w-full" data-bs-interval="2000">
        <img src="2.jpg" className="block w-full h-[450px] xsm:h-40" alt="..."/>
      </div>
      <div className="carousel-item relative float-left w-full" data-bs-interval="2000">
        <img src="3.jpg" className="block w-full h-[450px] xsm:h-40" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div> 
  </div> )
}

export default Carousal