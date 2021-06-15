import { FC, useEffect, useRef, useState } from "react";

//* ==========OUR IMPORTS
import { IToast } from "./tooltip.interface";
import TooltipContent from "./tooltip-content";

const ToolTip: FC<IToast> = ({
  text,
  className,
  children,
  color,
  offset,
  tooltipWidth
}) => {
  const selfRef = useRef<HTMLDivElement>(null);
  const [elProperties, setElProperties] = useState<any>({ top: 0, width: 0 });

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
  
  return (
    <>
      <div className={`tooltip ${className ? className : ""}`} ref={selfRef}>
        <div
          className="tooltip_children">
          {children}
        </div>

     
            <TooltipContent
              text={text}
              offset={offset}
              color={color}
              top={elProperties.top}
              width={elProperties.width}
              tooltipWidth={tooltipWidth}
            />

    

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

export default ToolTip;
