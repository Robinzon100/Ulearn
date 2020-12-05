import { FC} from "react";
import { ChevronDown } from "react-feather";
import { useRootStore } from "../../mobx/RootStateContext";


import Button from "components/global_components/button/Button";


const Hero: FC = () => {
<<<<<<< HEAD
  const { userStore } = useRootStore()

=======
  const { userStore } = useRootStore();
>>>>>>> 66d7c83bb1da580829549564694db763785725ed

  return (
    <>
      <section className="hero">
        <div className="hero--mobile-bg"></div>
        <div className="hero--steps">
          <div className="hero--steps__heading">
            <h1 className="heading-bold heading-3_5">
              რაღაცა ტექსტი იქნება აქ რომელიც აღწერს სერვის
            </h1>
          </div>
          <div className="hero--steps__line"></div>
          <div className="hero--steps__paragraph">
            <p className="paragraph-regulars paragraph-medium-small">
              რაიმე პატარა ტექსტი რომელიც უფრო დეტალურად აღწერს რას აკეთებს
              საიტი და ისეთი სიტყვები იქნება რაც SEO-ს დაევასება და googl-იც
              მაღლა აგვაგდებს
            </p>
          </div>
          <div className="hero--steps__btn">
<<<<<<< HEAD
            {/* <NextLink route="/join"
              className="btn btn-white heading-semi-bold  paragraph-medium">
              შემოგვიერთდი
              </NextLink>
              <Link>

              </Link> */}
            <Button
              title={"შემოგვიერთდი"}
              href={"/join"}
              className={"btn btn-white heading-semi-bold  paragraph-medium "}
            />
          </div>

=======
           
              <Button
                title={"შემოგვიერთდი"}
                className={"heading-semi-bold  paragraph-medium"}
                route={"/join"}
                // icon={<ChevronDown/>}
                iconStyle={{color:"black"}}
                // loading={true}
                backgroudColor={"btn-white"}
              />
            
          </div>
>>>>>>> 66d7c83bb1da580829549564694db763785725ed
        </div>
        <div className="hero--video">
          <video autoPlay loop muted playsInline>
            <source src="/Videos/new_hero_video.mp4" type="video/mp4" />
            {/* <source src="/Videos/hero_section_animation.ogg" type="video/ogg" /> */}

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
