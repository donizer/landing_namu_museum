import { useContext } from 'react';
import { appContext } from '../Contexts/AppContext';
import Carousel from './Carousel';

import img1 from '../assets/paintingsGallery/2aeae51c5ea84827e6b478cf07d3d27d.jpg';
import img2 from '../assets/paintingsGallery/32f07b1eb3cd7381f66a1aa7eb78e2da.jpg';
import img3 from '../assets/paintingsGallery/48966f7823421a2c24bf2d4899f3f06f.jpg';
import img4 from '../assets/paintingsGallery/niHOBF9YxSg.jpg';

const images = [img1, img2, img3, img4];

export const Gallery = () => {
  const { windowDimensions } = useContext(appContext);

  const carouselIndex = windowDimensions.width >= 756 ? 2 : 1;
  const carouselWidth = windowDimensions.width >= 756 ? 340 : 280;
  const carouselHeight = windowDimensions.width >= 756 ? 543 : 410;

  return (
    <>
      {windowDimensions.width < 1280 ? (
        <div className="col-start-2 col-end-4 flex w-full justify-center md:col-end-8">
          <Carousel
            images={images}
            itemWidth={carouselWidth}
            itemHeight={carouselHeight}
            frameSize={carouselIndex}
            step={carouselIndex}
            animationDuration={300}
            infinite
          />
        </div>
      ) : (
        <div className="col-start-2 col-end-[14] grid grid-cols-12 gap-[30px]">
          <img
            className="col-span-4 h-full scale-x-[-1] object-cover"
            src={img3}
            alt=""
          />
          <img className="col-span-8 w-full scale-x-[-1]" src={img2} alt="" />
          <img
            className="row-start col-span-8 h-[360px] w-full scale-x-[-1] object-cover"
            src={img1}
            alt=""
          />
          <img
            className="col-span-4 h-full scale-x-[-1] object-cover"
            src={img4}
            alt=""
          />
        </div>
      )}
    </>
  );
};
