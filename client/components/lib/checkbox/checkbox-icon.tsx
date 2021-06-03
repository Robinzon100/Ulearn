import { useMemo, memo } from "react";

interface Props {
  disabled?: boolean;
  checked?: boolean;
  iconPosition?:string
  
}

const CheckboxIcon: React.FC<Props> = ({ iconPosition,disabled, checked }) => {
  const { stroke } = useMemo(() => {
    return {
      fill: "#000",
      bg: "#fff",
      stroke: "#666",
    };
  }, []);

  return (
    <>
      <div className="icon">
        {checked ? (
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.415527" y="0.943298" width="21.59" height="21.59" rx="5" fill="#191B1F"/>
          <path d="M6.32715 11.532L10.1126 15.3172L17.2705 8.15936" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
            fill="none">
            <path
              d="M8.5 0.5H3.5C1.84315 0.5 0.5 1.84315 0.5 3.5V8.5C0.5 10.1569 1.84315 11.5 3.5 11.5H8.5C10.1569 11.5 11.5 10.1569 11.5 8.5V3.5C11.5 1.84315 10.1569 0.5 8.5 0.5Z"
              stroke={stroke}
            />
          </svg>
        )}
      </div>

      <style jsx>{`
        .icon {
          width: 2rem;
          height: 2rem;
          position: absolute;
          left: 0;
          margin:${iconPosition};
          transform: translate(50%, -50%);
          top: 50%;
        }
        svg {
          display: inline-flex;
          user-select: none;
          opacity: ${disabled ? 0.4 : 1};
          cursor: ${disabled ? "not-allowed" : "pointer"};
        }

        @media screen and (max-width: $small-screen) {
            
        }
      `}</style>
    </>
  );
};

export default memo(CheckboxIcon);
