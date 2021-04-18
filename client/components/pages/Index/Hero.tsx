import { FC } from "react";

import Button from "components/lib/button/Button";
import { ChevronDown} from 'react-feather';


const Hero: FC = () => {

  return (
    <>

      <section className="hero">
        <div className="hero--mobile-bg"></div>
        <div className="hero--steps">
          <div className="hero--steps__heading">
            <h1 className="f-size-h5">
              რაღაცა ტექსტი იქნება აქ რომელიც აღწერს სერვის
            </h1>
          </div>
          <div className="hero--steps__line"></div>
          <div className="hero--steps__paragraph">
            <p className="f-size-p5">
              რაიმე პატარა ტექსტი რომელიც უფრო დეტალურად აღწერს რას აკეთებს
              საიტი და ისეთი სიტყვები იქნება რაც SEO-ს დაევასება და googl-იც
              მაღლა აგვაგდებს
            </p>
          </div>
          <div className="hero--steps__btn">
  
          <Button
            // route="/register"
            onClick={() => console.log("clicked")}
            color="white"
            size="large"
            disabled={false}
            loading={false}
            // stroke="black"
            icon={<ChevronDown/>}
            width="55%"
            >
            <p className="f-weight-r f-size-p4 ">
                შემოგვიერთდი
            </p>
            </Button>


        </div>
        </div>
        <div className="hero--video">
          <video autoPlay loop muted playsInline>
            <source src="/Videos/new_hero_video.mp4" type="video/mp4" />
            

            {/* //! firefox ში არ მუშაობს.ქრომში მუშაობს */}
            <svg
              id="HeroVideo"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter
                  id="offset"
                  x="-10%"
                  y="-20%"
                  height="0"
                  width="0"
                  transform="translate(90,0)"
                >
                  <feGaussianBlur stdDeviation="15" />
                  <feOffset dx="0" dy="10" result="B" />
                  <feMerge>
                    <feMergeNode in="B" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>
          </video>
        </div>
      </section>
    </>
  );
};

export default Hero;
