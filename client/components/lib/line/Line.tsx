

interface ILine{
    width?:string
    thickness?:string
    color?:string
    borderRadius?:string
    margin?:string;
}

const Line = ({width,thickness,color,borderRadius,margin}:ILine) => {
    return (
        <>
            <div className="line"></div>


            <style jsx>
                {`
                    .line {
                        width:${width};
                        border: ${thickness} solid ${color};
                        border-radius:${borderRadius};
                        margin:${margin} 0;
                    }
                `}
            </style>
        </>
    )
}

export default Line
