import { memo } from "react";

const Loading = () => {
  return (
    <>
      <div className="dot-wrapper">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </>
  );
};

export default memo(Loading);
