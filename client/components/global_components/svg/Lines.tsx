import React from 'react'



interface LinesWith {
    LineWidth:number;
}

// const gerLineWidthPercentage = (StrokeLine : number, LineWidth:number) => {
//     let width = (StrokeLine * LineWidth) / 100 

//     return width;
// }

const Lines:React.FC<LinesWith> = ({LineWidth}) => {
    return (
        <>
            <svg width="189" height="16" viewBox="0 0 189 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.36" x="5.97119" y="4.08789" width="100%" height="5.38091" rx="2.69046" fill="#FCE984" />
                <g filter="url(#filter0_d)">
                    <rect x="5.97119" y="4.08789" width={`${LineWidth}%`} height="5.38091" rx="2.69046" fill="#FFD703" />
                </g>
                <defs>
                    <filter id="filter0_d" x="0.971191" y="0.0878906" width="159.23" height="15.3809" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="2.5" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.841882 0 0 0 0 0.0117647 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                    </filter>
                </defs>
            </svg>


        </>
    )
}


export default Lines;
