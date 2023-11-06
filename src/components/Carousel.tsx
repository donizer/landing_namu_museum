import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

type Props = {
  images: string[];
  itemWidth?: number;
  itemHeight?: number;
  step?: number;
  frameSize?: number;
  animationDuration?: number;
  infinite?: boolean;
};

const Carousel: React.FC<Props> = ({
  images,
  itemWidth = 130,
  itemHeight = 231,
  step = 3,
  frameSize = 3,
  animationDuration = 1000,
  infinite = false,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const lastFramedIndex = images.length - frameSize;

  const updateIndex = (newIndex: number) => {
    let modifiedIndex = newIndex;

    if (newIndex < 0 && activeIndex > 0) {
      modifiedIndex = 0;
    } else if (newIndex < 0) {
      modifiedIndex = infinite ? lastFramedIndex : 0;
    } else if (newIndex >= lastFramedIndex && activeIndex < lastFramedIndex) {
      modifiedIndex = lastFramedIndex;
    } else if (newIndex >= lastFramedIndex) {
      modifiedIndex = infinite ? 0 : lastFramedIndex;
    }

    setActiveIndex(modifiedIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + step),
    onSwipedRight: () => updateIndex(activeIndex - step),
  });

  return (
    <div
      {...handlers}
      className="col-span-full overflow-hidden "
      style={{ width: itemWidth * frameSize }}
    >
      <ul
        className="relative left-0 right-0 inline-flex"
        style={{
          transitionDuration: `${animationDuration}ms`,
          transform: `translateX(-${activeIndex * itemWidth}px)`,
        }}
      >
        {images.map(imageUrl => (
          <li
            className="inline-flex flex-shrink-0 flex-grow items-center justify-center"
            key={imageUrl}
          >
            <img
              className="object-cover"
              style={{ width: itemWidth, height: itemHeight }}
              src={imageUrl}
              alt={imageUrl}
              width={itemWidth}
            />
          </li>
        ))}
      </ul>
      <div className="flex w-full justify-center gap-4">
        {images.map((_, i) => {
          return (
            <div
              key={images[i]}
              className={`my-5 h-[9px] w-[9px] rounded-full ${
                i === activeIndex ? 'bg-[#1A5A4C]' : 'bg-[#E0E0E0]'
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

Carousel.defaultProps = {
  step: 3,
  itemWidth: 130,
  frameSize: 3,
  animationDuration: 1000,
  infinite: false,
};

export default Carousel;
