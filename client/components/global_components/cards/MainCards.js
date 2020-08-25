import React, { useState } from 'react'
import Price from "components/global_components/price/price";



export default function MainCards({ price, title, author, rating, bestseller }) {
    const [addToFavorites, setAddToFavorites] = useState(false);

    return (

        <div className="card">
            <a href="#">
                <div className="card__img">
                   <Price price={price}/>
                </div>

            </a>

            <div className="card__title">
                <p className="heading-bold-Noto paragraph-medium ">{title}</p>
            </div>
            <div className="card__raiting">
                <div className="card__raiting--container">
                    <div className="star">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.99401 1.41497C8.37173 0.714397 9.37673 0.714397 9.75445 1.41497L11.6834 4.99273C11.8354 5.27475 12.1134 5.46683 12.431 5.50933L16.5911 6.06603C17.4383 6.17941 17.762 7.23465 17.124 7.80355L14.2328 10.3818C13.9713 10.6149 13.8509 10.9679 13.9154 11.3123L14.6128 15.0348C14.7637 15.8405 13.9345 16.4755 13.1961 16.12L9.30804 14.248C9.03389 14.116 8.71457 14.116 8.44042 14.248L4.5524 16.12C3.81391 16.4755 2.98477 15.8405 3.13569 15.0348L3.83306 11.3123C3.89756 10.9679 3.77717 10.6149 3.5157 10.3818L0.624446 7.80355C-0.0135249 7.23465 0.310129 6.17941 1.15736 6.06603L5.31748 5.50933C5.63505 5.46683 5.91302 5.27475 6.06507 4.99273L7.99401 1.41497Z"
                                fill="#FFD703" />
                        </svg>

                    </div>
                    <div className="numbers">
                        <p className="Eina-semibold paragraph-small">{rating}</p>
                    </div>
                </div>
                <div className="card__raiting--name">
                    <p className="heading-semi-bold-Noto  paragraph-small">{author}</p>
                </div>
            </div>
            <div className="card__like">
                <label href="#" className="label heading-semi-bold-Noto paragraph-smallest">{bestseller}</label>

                <div className={addToFavorites ? "full-heart-svg" : "stroke-heart-svg"} onClick={() => setAddToFavorites(true)}></div>

                {/* <svg viewBox="0 0 59 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
                <ellipse cx="29.7295" cy="23.4179" rx="18.27" ry="18.8669" fill="white" />
            </g>
            <path
                d="M38.2957 17.4269C37.8008 16.9156 37.2131 16.5099 36.5663 16.2332C35.9195 15.9564 35.2263 15.814 34.5261 15.814C33.826 15.814 33.1327 15.9564 32.4859 16.2332C31.8391 16.5099 31.2515 16.9156 30.7565 17.4269L29.7294 18.4877L28.7022 17.4269C27.7024 16.3945 26.3464 15.8145 24.9326 15.8145C23.5187 15.8145 22.1627 16.3945 21.163 17.4269C20.1632 18.4594 19.6016 19.8596 19.6016 21.3197C19.6016 22.7798 20.1632 24.18 21.163 25.2124L22.1902 26.2732L29.7294 34.0587L37.2685 26.2732L38.2957 25.2124C38.7909 24.7013 39.1837 24.0945 39.4517 23.4265C39.7197 22.7586 39.8577 22.0427 39.8577 21.3197C39.8577 20.5967 39.7197 19.8808 39.4517 19.2129C39.1837 18.5449 38.7909 17.9381 38.2957 17.4269V17.4269Z"
                stroke="#FF5C4D" strokeჭidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
                <filter id="filter0_d" x="0.459473" y="0.550949" width="58.5401" height="59.7338"
                    filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="7" />
                    <feGaussianBlur stdDeviation="5.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.19 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
            </defs>
        </svg> */}

            </div>
        </div>
    )
}
