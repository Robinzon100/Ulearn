import { useRef, useState, useEffect } from "react";
import { forwardRef, PropsWithChildren } from "react";



interface ISlider {
  id:number;
  steps: number;
  back: string;
  front: string;
  min: number;
  max: number;
  width?: string;
  maxWidth?: string;
  currentValue?: string;
}

const RangeSlider = forwardRef<HTMLInputElement, PropsWithChildren<ISlider>> (({
  id,
  steps,
  back,
  front,
  min,
  max,
  width,
  maxWidth,
}, ref: React.Ref<HTMLInputElement | null>,) => {
  const sliderInputEl = useRef<HTMLInputElement>(null);
  const [sliderMinMax, setSliderMinMax] = useState({ min: min, max: max });
  const [gradientPosition, setGradientPosition] = useState(0);



  useEffect(() => {
    sliderInputEl.current.value = "0";
  }, []);




  const sliderHandler = () => {
    const sliderEl = sliderInputEl.current;
    setSliderMinMax({ min: +sliderEl.min, max: +sliderEl.max });
    setGradientPosition((+sliderEl.value - +sliderEl.min) / (+sliderEl.max - +sliderEl.min));
  };






  return (
    <>
      <div className="range-container">
        <input
          key={id}  
          onChange={() => sliderHandler()}
          ref={sliderInputEl}
          type="range"
          name="range"
          step={steps}
          min={sliderMinMax.min}
          max={sliderMinMax.max}
        />
        {/* <label htmlFor="range">50</label> */}
      </div>







      <style jsx>
        {`
          .range-container {
            position: relative;
            width: ${width};
            max-width: ${maxWidth};
          }

          input[type="range"] {
            width: 100%;
            margin: 18px 0;
            -webkit-appearance: none;
            background-color: #9a905d;
            background-image: -webkit-gradient(
              linear,
              left top,
              right top,
              color-stop(${gradientPosition}, ${back}),
              color-stop(${gradientPosition}, ${front})
            );
            border:none;
          }
        `}
      </style>
    </>
  );
}
);

export default RangeSlider;
