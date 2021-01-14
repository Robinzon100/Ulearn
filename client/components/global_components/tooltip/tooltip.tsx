import { FC, useEffect, useRef, useState } from "react";

//* ==========OUR IMPORTS
import { IToast } from "./tooltip.interface";
import TooltipContent from "./tooltip-content";

const toolTip: FC<IToast> = ({
  text,
  trigger,
  className,
  children,
  color,
  offset,
  tooltipWidth
}) => {
  const selfRef = useRef<HTMLDivElement>(null);
  const [elProperties, setElProperties] = useState<any>({ top: 0, width: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  const updateRect = () => {
    if (!selfRef || !selfRef.current) return elProperties;
    const rect = selfRef.current.getBoundingClientRect();
    const width = rect.width;
    const top = rect.top;
    setElProperties({ width, top });
  };

  useEffect(() => {
    updateRect();
  }, [children]);


  const mouseEventHandler = (state:boolean,delay:number) => {
    setTimeout(() => {
      setShowTooltip(state);
    }, delay);
  };


  return (
    <>
      <div className={`tooltip ${className ? className : ""}`} ref={selfRef}>
        <div
          className="tooltip_children"
          onMouseEnter={() => mouseEventHandler(true,300)}
          onMouseLeave={() => mouseEventHandler(false,300)}>
          {children}
        </div>

        {showTooltip && (
            <TooltipContent
              text={text}
              offset={offset}
              color={color}
              top={elProperties.top}
              width={elProperties.width}
              tooltipWidth={tooltipWidth}
            />

        )}

        <style jsx>{`
          .tooltip {
            position: relative;
            display: inline-block;
          }
        `}</style>
      </div>
    </>
  );
};

export default toolTip;
