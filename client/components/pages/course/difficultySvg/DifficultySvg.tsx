
const DifficultySvg: React.FC<{ difficulty: number }> = ({ difficulty }) => {

  return (
    <>
      <svg
        width="55"
        height="51"
        viewBox="0 0 55 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {difficulty == 1 && (
          <>
            <g filter="url(#filter0_d)">
              <rect
                x="4.31384"
                y="23.2949"
                width="10.7184"
                height="17.8889"
                rx="4"
                fill="#16C93E"
              />
              <rect
                x="4.81384"
                y="23.7949"
                width="9.7184"
                height="16.8889"
                rx="3.5"
                stroke="#C9C9C9"
              />
            </g>

            <g filter="url(#filter1_d)">
              <rect
                x="21.6628"
                y="14.0547"
                width="10.7184"
                height="27.1288"
                rx="4"
                fill="white"
              />
              <rect
                x="22.1628"
                y="14.5547"
                width="9.7184"
                height="26.1288"
                rx="3.5"
                stroke="#C9C9C9"
              />
            </g>
            <g filter="url(#filter2_d)">
              <rect
                x="39.0118"
                y="1.51465"
                width="10.7184"
                height="39.6686"
                rx="4"
                fill="white"
              />
              <rect
                x="39.5118"
                y="2.01465"
                width="9.7184"
                height="38.6686"
                rx="3.5"
                stroke="#C9C9C9"
              />
            </g>
          </>
        )}

        {difficulty == 2 && (
          <>
            <g filter="url(#filter0_d)">
              <rect
                x="4.31384"
                y="23.2949"
                width="10.7184"
                height="17.8889"
                rx="4"
                fill="#16C93E"
              />
              <rect
                x="4.81384"
                y="23.7949"
                width="9.7184"
                height="16.8889"
                rx="3.5"
                stroke="#C9C9C9"
              />
            </g>

            <g filter="url(#filter1_d)">
              <rect
                x="21.6628"
                y="14.0547"
                width="10.7184"
                height="27.1288"
                rx="4"
                fill="#16C93E"
              />
              <rect
                x="22.1628"
                y="14.5547"
                width="9.7184"
                height="26.1288"
                rx="3.5"
                stroke="#C9C9C9"
              />
            </g>
            <g filter="url(#filter2_d)">
              <rect
                x="39.0118"
                y="1.51465"
                width="10.7184"
                height="39.6686"
                rx="4"
                fill="white"
              />
              <rect
                x="39.5118"
                y="2.01465"
                width="9.7184"
                height="38.6686"
                rx="3.5"
                stroke="#C9C9C9"
              />
            </g>
          </>
        )}

        {difficulty == 3 && (
          <>
            <g filter="url(#filter0_d)">
              <rect
                x="4.31384"
                y="23.2949"
                width="10.7184"
                height="17.8889"
                rx="4"
                fill="#16C93E"
              />
              <rect
                x="4.81384"
                y="23.7949"
                width="9.7184"
                height="16.8889"
                rx="3.5"
                stroke="#C9C9C9"
              />
            </g>

            <g filter="url(#filter1_d)">
              <rect
                x="21.6628"
                y="14.0547"
                width="10.7184"
                height="27.1288"
                rx="4"
                fill="#16C93E"
              />
              <rect
                x="22.1628"
                y="14.5547"
                width="9.7184"
                height="26.1288"
                rx="3.5"
                stroke="#C9C9C9"
              />
            </g>
            <g filter="url(#filter2_d)">
              <rect
                x="39.0118"
                y="1.51465"
                width="10.7184"
                height="39.6686"
                rx="4"
                fill="#16C93E"
              />
              <rect
                x="39.5118"
                y="2.01465"
                width="9.7184"
                height="38.6686"
                rx="3.5"
                stroke="#C9C9C9"
              />
            </g>
          </>
        )}

        <defs>
          <filter
            id="filter0_d"
            x="0.313843"
            y="23.2949"
            width="18.7184"
            height="25.8889"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d"
            x="16.6628"
            y="13.0547"
            width="20.7184"
            height="37.1288"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d"
            x="34.0118"
            y="0.514648"
            width="20.7184"
            height="49.6686"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default DifficultySvg;
