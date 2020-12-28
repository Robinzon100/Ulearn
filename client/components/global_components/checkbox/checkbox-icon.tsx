import { useMemo, memo } from "react";

interface Props {
  disabled?: boolean;
  checked?: boolean;
}

const CheckboxIcon: React.FC<Props> = ({ disabled, checked }) => {
  const { fill, bg, stroke } = useMemo(() => {
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
          <svg
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1429 0H3.85714C1.7269 0 0 1.79086 0 4V12C0 14.2091 1.7269 16 3.85714 16H12.1429C14.2731 16 16 14.2091 16 12V4C16 1.79086 14.2731 0 12.1429 0Z"
              fill={fill}
            />
            <path d="M16 3L7.72491 11L5 8" stroke={bg} strokeWidth="1.5" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
            fill="none"
          >
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
          left: 8%;
          transform: translate(50%, -50%);
          top: 50%;
        }
        svg {
          display: inline-flex;
          user-select: none;
          opacity: ${disabled ? 0.4 : 1};
          cursor: ${disabled ? "not-allowed" : "pointer"};
        }
      `}</style>
    </>
  );
};

export default memo(CheckboxIcon);
