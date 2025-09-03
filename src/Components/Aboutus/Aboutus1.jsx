import React from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Aboutus1 = () => {
  const imgDivRef = useRef(null);
  const imgRef = useRef(null);

  const carArray = [
    "https://i.pinimg.com/1200x/91/4f/65/914f65915c1b326fddec00427cbe8079.jpg",
    "https://i.pinimg.com/1200x/c0/93/2a/c0932a93c88f8b673b8b02a5a2ccb7be.jpg",
    "https://i.pinimg.com/736x/d9/d7/4c/d9d74c2208419795afcab2f4f73caf8a.jpg",
    "https://i.pinimg.com/1200x/0c/d9/0d/0cd90d78e1d41622ea6428a51474e0ad.jpg",
    "https://i.pinimg.com/1200x/0c/d9/0d/0cd90d78e1d41622ea6428a51474e0ad.jpg",
    "https://i.pinimg.com/1200x/22/fb/78/22fb7858f90a79c917a4a2efae786ce1.jpg",
    "https://i.pinimg.com/736x/ba/ad/6c/baad6c49eb38e9e3076908bfc84297b4.jpg",
    "https://i.pinimg.com/1200x/58/19/14/581914e20940b7f770f5b7be4aacbbe3.jpg",
    "https://i.pinimg.com/736x/b0/f7/fd/b0f7fd6998ee13a0c97492026fadabba.jpg",
    "https://i.pinimg.com/1200x/d1/76/77/d17677b60f3f69a48b0e9fc1f4a12614.jpg",
    "https://i.pinimg.com/736x/f2/06/1c/f2061c8cffeb798a00d845b43b6e4a80.jpg",
    "https://i.pinimg.com/1200x/49/6f/05/496f050f0f62a80bce1c4fdb54c7e29f.jpg",
    "https://i.pinimg.com/1200x/db/d1/b4/dbd1b4767644fe85a6e2162a1fa441dc.jpg",
    "https://i.pinimg.com/736x/f1/fb/88/f1fb88a5b5b558e59de697df93b23c67.jpg",
    "https://i.pinimg.com/736x/98/c3/d5/98c3d5f19200fb6b68b9429ccae4e102.jpg",
  ];

  useGSAP(() => {
    gsap.to(imgDivRef.current, {
      scrollTrigger: {
        trigger: imgDivRef.current,

        start: "top 10%",
        end: "top -50%",
        pin: true,
        onUpdate: (self) => {
          const imageIdx = Math.floor(self.progress * carArray.length);
          imgRef.current.src =
            carArray[
              imageIdx >= carArray.length ? carArray.length - 1 : imageIdx
            ];
        },
      },
    });
  }, []);
  return (
    <div>
      <div>
        <div ref={imgDivRef} className="Scrollimage">
          <img
            ref={imgRef}
            src="https://i.pinimg.com/1200x/91/4f/65/914f65915c1b326fddec00427cbe8079.jpg"
            alt=""
          />
          
        </div>
        
      </div>
    </div>
  );
};

export default Aboutus1;
