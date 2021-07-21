import React, {useState, useEffect} from 'react';
import rectDer from "./rec_der.png"; 
import rectIzq from "./rec_izq.png";
import rectDer2 from './rec-2.png'; 

export default function Rectangle() {
    const [img1, setImage] = useState(true);
    const [img2, setImageTwo] = useState(false);

    const showImage = () => {
        if (window.innerWidth <= 797) {
            setImage(false);
            setImageTwo(true);
        } else {
            setImage(true);
            setImageTwo(false);
        }
      };

      useEffect(() => {
        showImage();
      }, []);
    
      window.addEventListener('resize', showImage);

    return (
        <div className="o-bg-rect">
            <img src={rectDer} alt="rectangulos" className="o-bg-rectangles"></img>
            {img1 && <img src={rectIzq} alt="rectangulos" className="o-bg-rectangles"></img>}
            {img2 && <img src={rectDer2} alt="rectangulos" className="o-bg-rectangles"></img>}
        </div>
    )
}
