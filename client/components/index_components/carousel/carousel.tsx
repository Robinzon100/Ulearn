import React, { Fragment } from "react";

interface Props {
  id: number;
  title: string;
}

const carousel: React.FC<Props> = ({ id, title }) => {
  return (
    <Fragment>
      <div className="main_content--carousel noselect">
        <div className="right_slider_btn">
          <svg
            width="122"
            height="122"
            viewBox="0 0 122 122"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d)">
              <rect
                x="31.1147"
                y="18.4376"
                width="59.4965"
                height="59.4965"
                rx="18"
                fill="white"
              />
            </g>
            <path
              d="M57.6589 39.7777L66.067 48.1859L57.6589 56.594"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <filter
                id="filter0_d"
                x="0.114746"
                y="0.437622"
                width="121.496"
                height="121.496"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feMorphology
                  radius="10"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect1_dropShadow"
                />
                <feOffset dy="13" />
                <feGaussianBlur stdDeviation="20.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0668403 0 0 0 0 0.0894792 0 0 0 0 0.208333 0 0 0 0.3 0"
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
        </div>
        <div className="container">
          <div className="carousel_card">
            <div className="carousel_card--pic"></div>
            <div className="carousel_card--heading">
              <p className="heading-bold-Noto paragraph-regular">{title}</p>
            </div>
          </div>
          <div className="carousel_card">
            <div className="carousel_card--pic"></div>
            <div className="carousel_card--heading">
              <p className="heading-bold-Noto paragraph-regular">{title}</p>
            </div>
          </div>
          <div className="carousel_card">
            <div className="carousel_card--pic"></div>
            <div className="carousel_card--heading">
              <p className="heading-bold-Noto paragraph-regular">{title}</p>
            </div>
          </div>
          <div className="carousel_card">
            <div className="carousel_card--pic"></div>
            <div className="carousel_card--heading">
              <p className="heading-bold-Noto paragraph-regular">{title}</p>
            </div>
          </div>

          <div className="carousel_card">
            <div className="carousel_card--pic"></div>
            <div className="carousel_card--heading">
              <p className="heading-bold-Noto paragraph-regular">{title}</p>
            </div>
          </div>
          <div className="carousel_card">
            <div className="carousel_card--pic"></div>
            <div className="carousel_card--heading">
              <p className="heading-bold-Noto paragraph-regular">{title}</p>
            </div>
          </div>
          <div className="carousel_card">
            <div className="carousel_card--pic"></div>
            <div className="carousel_card--heading">
              <p className="heading-bold-Noto paragraph-regular">{title}</p>
            </div>
          </div>
          <div className="carousel_card">
            <div className="carousel_card--pic"></div>
            <div className="carousel_card--heading">
              <p className="heading-bold-Noto paragraph-regular">{title}</p>
            </div>
          </div>
        </div>
        <div className="left_slider_btn"></div>
      </div>
    </Fragment>
  );
};

export default carousel;
