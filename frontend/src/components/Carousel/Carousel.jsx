function Banner() {
  return (
    <div id="carouselFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/campus-image.png" className="d-block w-100" alt="img1" />
        </div>
        <div className="carousel-item">
          <img src="/college-computerlab.png" className="d-block w-100" alt="img2" />
        </div>
        
        <div className="carousel-item">
          <img src="/college-lecturehall.png" className="d-block w-100" alt="img3" />
        </div>
        <div className="carousel-item">
          <img src="/college-library.png" className="d-block w-100" alt="img4" />
        </div>
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Banner;
