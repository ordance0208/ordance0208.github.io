import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import { UilAngleLeftB, UilAngleRightB } from '@iconscout/react-unicons';
import IProject from '../../../../models/Project';

interface Props {
  selectedProject: IProject | null;
}

const Carousel = ({ selectedProject }: Props) => {
  const renderCarouselArrow = (
    clickHandler: () => void,
    hasNext: boolean,
    label: string,
    isRightArrow?: boolean
  ) => {
    return (
      <div
        onClick={clickHandler}
        className={`w-[40px] hover:cursor-pointer text-[#333333] hover:text-[#FAFAFA] hover:bg-black/20 h-full absolute top-0 justify-center items-center ${
          hasNext ? 'flex z-10' : 'hidden'
        } ${isRightArrow ? 'right-0' : 'left-0'}`}
      >
        <div aria-label={label}>
          {isRightArrow ? (
            <UilAngleRightB size={32} />
          ) : (
            <UilAngleLeftB size={32} />
          )}
        </div>
      </div>
    );
  };

  return (
    <ResponsiveCarousel
      swipeable
      emulateTouch
      renderArrowNext={(clickHandler, hasNext, label) =>
        renderCarouselArrow(clickHandler, hasNext, label, true)
      }
      renderArrowPrev={(clickHandler, hasPrev, label) =>
        renderCarouselArrow(clickHandler, hasPrev, label, false)
      }
      showStatus={false}
      showThumbs={false}
    >
      {selectedProject?.screenshots.map((screenshot: string, index: number) => (
        <div key={screenshot}>
          <img
            style={{ userSelect: 'none' }}
            src={screenshot}
            alt={`screenshot-${index}`}
            loading='lazy'
          />
        </div>
      ))}
    </ResponsiveCarousel>
  );
};

export default Carousel;
