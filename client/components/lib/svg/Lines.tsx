
const Lines: React.FC<{ percent: number }> = ({ percent }) => {
    return (
        <>
            <svg
                className="rating_lines"
                width="200"
                height="16"
                viewBox="0 0 189 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                    
                <g>
                    <rect
                        className='filled_line'
                        x="5.97119"
                        y="4.08789"
                        width={`${percent}%`}
                        height="5.38091"
                        rx="2.69046"
                        fill="#FFD703" />

                    <rect
                        opacity="0.36"
                        x="5.97119"
                        y="4.08789"
                        width="100%"
                        height="5.38091"
                        rx="2.69046"
                        fill="#FCE984" />
                </g>
            </svg>
        </>
    )
}


export default Lines;
