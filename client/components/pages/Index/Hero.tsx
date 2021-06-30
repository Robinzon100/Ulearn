import { FC, useEffect, useState } from "react";

import Button from "components/lib/button/Button";
import { ArrowRight} from 'react-feather';


const Hero: FC = () => {
    const [firefox, setFirefox] = useState<boolean>(false)

    useEffect(() => {
        setFirefox(navigator.userAgent.search('Firefox') > -1)
    }, [firefox])



  return (
    <>

      <section className="hero" 
      style={{filter:`${firefox ? "none" : "url(#offset)"}`}}>

        <div className="hero--mobile-bg"></div>
        <div className="hero--steps">
          <div className="hero--steps__heading">
            <h3 className="f-size-h4 f-weight-bl c-primary-white">
              ჩვენ ვასწავლით 
            <br/>
              თქვენ სწავლობთ
            </h3>
          </div>
          <div className="hero--steps__line"></div>
          <div className="hero--steps__paragraph">
            <p className="f-size-p5">
              Ulearn არის თანამედროვე ონლაინ სასწავლო კურსების პლათფორმა,სადაც 
              ნებისმიერი მომხმარებელი შეძლებს,რომ მიიღოს პროფესიული დონის განათლება 
              და გამოცდილება.
            </p>
          </div>
          <div className="hero--steps__btn">
  
          <Button
                color="white"
                size="large"
                disabled={false}
                loading={false}
                route="/register"
                iconRight={<ArrowRight/>}
                width="35rem">
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
                  <feGaussianBlur stdDeviation="20" />
                  <feOffset dx="0" dy="20" result="B" />
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
