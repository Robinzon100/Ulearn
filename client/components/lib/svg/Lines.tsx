import { useEffect } from "react";


interface LinesWith {
    LineWidth:any;
}

const Lines:React.FC<LinesWith> = ({LineWidth}) => {

    const sumRaitings = () => {
        let array = [];
        let sum = 0;


        // console.log(LineWidth)
        array.push(LineWidth)

        // console.log(array)
        // console.log(array.reduce((a, b) => a[0] + b[0], 0))

        return sum

    }
    const computeLines = () => {
        const rating_lines = document.querySelectorAll<HTMLElement>(".rating_lines");
        let svgWidth = 0;


        rating_lines.forEach((line) => {
            let svg = line.getBoundingClientRect();
            
            svgWidth = svg.width

            console.log(svgWidth / LineWidth)
        })
        
        return svgWidth;
    }     
    
    useEffect(() => {
        sumRaitings()
    }, [])

    return (
        <>
            <svg className="rating_lines" width="200" height="16" viewBox="0 0 189 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.36" x="5.97119" y="4.08789" width="100%" height="5.38091" rx="2.69046" fill="#FCE984" />
                <g filter="url(#filter0_d)">
                    <rect x="5.97119" y="4.08789" width={`${LineWidth}`} height="5.38091" rx="2.69046" fill="#FFD703" />
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
