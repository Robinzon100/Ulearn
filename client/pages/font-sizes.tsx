import React from "react";

const fontSizes = () => {
  return (
    <>
      <div className="test_wrapper">
          <p className="black f-size-h1">სათაურის ფონის ზომა - 1,2,3,4,5</p>
          <p className="bold f-size-h2">სათაურის ფონის ზომა - 1,2,3,4,5</p>
          <p className="regular f-size-p3">სათაურის ფონის ზომა - 1,2,3,4,5</p>
          <p className="light f-size-p4">სათაურის ფონის ზომა - 1,2,3,4,5</p>


          <p className="black f-size-h1">My Text Size - 1,2,3,4,5,1500</p>
          <p className="bold f-size-h2">My Text Size - 1,2,3,4,5,1500</p>
          <p className="regular f-size-p3">My Text Size - 1,2,3,4,5,1500</p>
          <p className="light f-size-p4">My Text Size - 1,2,3,4,5,1500</p>





        <style jsx>
          {`
            .test_wrapper {
              margin-top: 10rem;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default fontSizes;
