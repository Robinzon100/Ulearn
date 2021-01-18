import { FC} from "react";
import { useRootStore } from "../../mobx/RootStateContext";

import Button from "components/global_components/button/Button";
import { ChevronDown} from 'react-feather';
import Tooltip from "components/global_components/tooltip/tooltip";
import Toast from "components/global_components/toast/toast";
import useToasts from "components/global_components/toast/use-toast";


const Hero: FC = () => {

    const handler = (value) => {
        console.log("ჰერო" + value)
    }
    const click = () => useToasts({title:"Beqa",size:"large"});

  return (
    <>
                  
        {/* <Toast 
            title="მე შენ და საქართველო,ოდელია რანუნი" 
            color="black" 
            size="large"
        /> */}
      <section className="hero">
        <div className="hero--mobile-bg"></div>
        <div className="hero--steps">
          <div className="hero--steps__heading">
            <h1 className="bold f-size-h5">
              რაღაცა ტექსტი იქნება აქ რომელიც აღწერს სერვის
            </h1>
          </div>
          <div className="hero--steps__line"></div>
          <div className="hero--steps__paragraph">
            <p className="regular f-size-p5">
              რაიმე პატარა ტექსტი რომელიც უფრო დეტალურად აღწერს რას აკეთებს
              საიტი და ისეთი სიტყვები იქნება რაც SEO-ს დაევასება და googl-იც
              მაღლა აგვაგდებს
            </p>
          </div>
          <div className="hero--steps__btn">
              <Button
                title="შემოგვიერთდი"
                className=""
                // route="/register"
                onClick={click}
                color="white"
                size="large"
                disabled={false}
                loading={false}
                // stroke="black"
                icon={<ChevronDown/>}
                />
  
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
