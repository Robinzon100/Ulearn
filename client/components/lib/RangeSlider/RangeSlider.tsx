




interface ISlider {
    width?:string;
    maxWidth?:string;
}


const RangeSlider = () => {
  return (
    <>
      <div className="range-container">
        <input type="range" name="range" id="range" min="0" max="100" />
        {/* <label htmlFor="range">50</label> */}
      </div>

      <style jsx>
        {`
          .range-container {
            position: relative;
          }

          input[type='range'] {
            overflow: hidden;
            width: 300px;
            margin: 18px 0;
            -webkit-appearance: none;
            background-color: #9a905d;
          }

         
        `}
      </style>
    </>
  );
};

export default RangeSlider;
