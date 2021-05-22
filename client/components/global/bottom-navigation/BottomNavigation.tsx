import Link from "next/link";





const BottomNavigation = () => {
  return (
    <>
      <div className="bottom-navigation">
        <div className="bottom-navigation__container">
          <div className="item">

              
            <div className="bottom-course">
                <div className="bottom-course-svg"></div>
                <div className="bottom-course-heading">
                    <h1 className="f-size-p8 f-weight-r">კურსები</h1>
                </div>
              </div>


              <div className="bottom-course">
                <div className="bottom-course-svg"></div>
                <div className="bottom-course-heading">
                    <h1 className="f-size-p8 f-weight-r">კურსები</h1>
                </div>
              </div>
          </div>


          <Link href="#">
            <div className="item search"></div>
          </Link>
          

          <div className="item">

            {/* <div className="bottom-course">
                <div className="bottom-course-svg"></div>
                <div className="bottom-course-heading">
                    <h1 className="f-size-p7 f-weight-r">კურსები</h1>
                </div>
              </div>

              <div className="bottom-course">
                <div className="bottom-course-svg"></div>
                <div className="bottom-course-heading">
                    <h1 className="f-size-p7 f-weight-r">კურსები</h1>
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
};







export default BottomNavigation;
