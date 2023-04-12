import { useState } from "react";
import "./ImagesCard.css";
import { ImagesNavigator } from "./imagesNavigator/ImagesNavigator";

export const ImagesCard = ({ images }) => {
  const [imageShowing, setImageShowing] = useState(0);

  const handleImageChange = (event) => {
    let nextValueTobe
    if(event.target.value === "next"){
      nextValueTobe = (imageShowing+1) > images.length-1 ? imageShowing : imageShowing+1
    }
    if(event.target.value === "previous"){
      nextValueTobe = (imageShowing-1) < 0 ? imageShowing : imageShowing - 1
    }
    setImageShowing(nextValueTobe);
  };
  return (
    <div className="images-card-container">
      <img src={images[imageShowing]} className="images-card" alt="" />
      <ImagesNavigator images={images} imageShowing={imageShowing} handleImageChange={handleImageChange} />
    </div>
  );
};
