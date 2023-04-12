import "./ImagesNavigator.css"
export const ImagesNavigator = ({handleImageChange, images, imageShowing}) => {
  return (
    <div className="images-card-control">
        <button
          value="previous"
          onClick={handleImageChange}
          className="images-card-change"
        >
          <i class="fas fa-arrow-left"></i>
        </button>
        {(imageShowing-1) > 0 && <span><img className="images-card-navigator" src={images[imageShowing-1]} /></span>}
        <span><img className="images-card-navigator" src={images[imageShowing]} /></span>
        {(imageShowing+1) < images.length-1 && <span><img className="images-card-navigator" src={images[imageShowing+1]} /></span>}
        <button
          value="next"
          onClick={handleImageChange}
          className="images-card-change"
        >
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
  )
}