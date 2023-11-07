import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

type Props = {
  images: string[];
  itemWidth?: number;
  itemHeight?: number;
  gap?: number;
  step?: number;
  frameSize?: number;
  animationDuration?: number;
  infinite?: boolean;
};

const Carousel: React.FC<Props> = ({
  images,
  itemWidth = 130,
  itemHeight = 231,
  gap = 0,
  step = 3,
  frameSize = 3,
  animationDuration = 1000,
  infinite = false,
}) => {
  const lastFramedIndex = images.length - frameSize;
  const [activeIndex, setActiveIndex] = useState(0);
  const [transformValue, setTransformValue] = useState(activeIndex * itemWidth);

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

  useEffect(() => {
    const calc =
      activeIndex === 0
        ? activeIndex * itemWidth
        : activeIndex * itemWidth + gap * activeIndex;

    setTransformValue(calc);
  }, [activeIndex, gap, images.length, itemWidth]);

  return (
    <div
      {...handlers}
      className="col-span-full overflow-x-hidden"
      style={{ width: itemWidth * frameSize }}
    >
      <ul
        className="relative left-0 right-0 inline-flex gap-x-[16px] md:gap-x-5"
        style={{
          transitionDuration: `${animationDuration}ms`,
          transform: `translateX(-${transformValue}px)`,
        }}
      >
        {images.map((imageUrl, i) => {
          return (
            <li
              className="inline-flex flex-shrink-0 flex-grow items-center justify-center transition-all"
              key={i}
            >
              <img
                className="scale-x-[-1] select-none object-cover"
                style={{ width: itemWidth, height: itemHeight }}
                src={imageUrl}
                alt={imageUrl}
                width={itemWidth}
              />
            </li>
          );
        })}
      </ul>
      <div className="flex w-full justify-center gap-2">
        {images.slice(frameSize - 1).map((_, i) => {
          return (
            <div
              key={i}
              className="my-4 grid h-5 w-5 shrink-0 content-center justify-center"
            >
              <div
                onClick={() => setActiveIndex(i)}
                className={` h-[9px] w-[9px] rounded-full ${
                  i === activeIndex ? 'bg-[#1A5A4C]' : 'bg-[#E0E0E0]'
                }`}
              />
            </div>
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
