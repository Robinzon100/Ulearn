
import {useState} from "react";
import ReactHtmlParser from "react-html-parser";


import { ShoppingCart } from "react-feather";
import NextLink  from "components/utils/NextLink";

import SideMenu from "components/lib/sidemenu/sideMenu";
import RatingsMenu from "components/pages/myCourse/RatingsMenu";
import Stars from "components/lib/svg/Stars";
import * as MyCoursesJson from "../public/json/MyCourses.json";
import Button from "components/lib/button/Button";


//! === INTERFACES(DO NOT DELETE)
// import { MyCoursePageContent } from "../interfaces/MyCoursesPage.interface";



const MyCourses= () => {
  let subTitles = [
    {
      id: 1,
      text: "ჯავა და მიში ჯანი",
      videoUrl:
        "https://s4106-05.imovies.cc/video/imovie_hash_code/1/2020090407554015_high_ENG.mp4?md5=Ul1cPbbjqASrVDkrD7Cmqg&expires=1599656612&data=YTozOntzOjc6InVzZXJfaXAiO3M6MTU6IjE3Ni4yMjEuMTMyLjIxMCI7czoxMDoidXNlcl9hZ2VudCI7czoxMTQ6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS84NS4wLjQxODMuODMgU2FmYXJpLzUzNy4zNiI7czo3OiJyZWZlcmVyIjtzOjIzOiJodHRwczovL3d3dy5pbW92aWVzLmNjLyI7fQ==",
      amountOfMinutes: 12,
    },
    {
      id: 2,
      text: "მიდი მიდი აბა რა",
      videoUrl:
        "https://s4114-21.imovies.cc/video/imovie_hash_code/3/2017050923065223_high_eng.mp4?md5=W1C5ex9RqZWL-Rejf4JUqw&expires=1599656434&data=YTozOntzOjc6InVzZXJfaXAiO3M6MTU6IjE3Ni4yMjEuMTMyLjIxMCI7czoxMDoidXNlcl9hZ2VudCI7czoxMTQ6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS84NS4wLjQxODMuODMgU2FmYXJpLzUzNy4zNiI7czo3OiJyZWZlcmVyIjtzOjIzOiJodHRwczovL3d3dy5pbW92aWVzLmNjLyI7fQ==",
      amountOfMinutes: 12,
    },
  ];
  

  const [MyCourseContent,] = useState(MyCoursesJson.description);

  return (
    <>
      <>
        <section className="mycourses">
          <div className="mycourses__container">
            <div className="mycourses-hero">
              <div className="mycourses-hero__about-course">
                <div className="mycourses-hero__about-course--heading">
                  <p className="f-size-h5">
                    როგორ გახდე DJ, DJ პროფესიის შესწავლა პროფესიულ დონეზე.
                  </p>
                </div>
                <div className="mycourses-hero__about-course--paragraph">
                  <p className="f-size-p6">
                    გავივლით DJ-ის პროფესიის ყველა ნიუანს, რას აკეთებს რეალრად
                    DJ რა ევალება ნებისმიერ დაწესებულებაში და ასევე შევქმნით
                    რამოდენიმე ტრეკს რომლის გაყიდვას და გაპიარებასაც შეძლებთ
                  </p>
                </div>
                <div className="mycourses-hero__about-course--btns">
                  <div className="buy-course">

                <Button
                    title="კურსის შეძენა"
                    className=""
                    route="/buy_course"
                    onClick={() => console.log('asdasda')}
                    color="green"
                    size="medium"
                    disabled={false}
                    loading={false}
                />
                  </div>

                <div className="save-bucket">
                <Button
                    title="კურსის შეძენა"
                    className=""
                    route="/save-bucket"
                    onClick={() => console.log('asdasda')}
                    color="yellow"
                    size="medium"
                    disabled={false}
                    loading={false}
                    icon={ <ShoppingCart />}
                />
                  </div>
                </div>
              </div>
              {/* //! რეიტინგები */}
              <div className="mycourses-hero__rating-course">
                <RatingsMenu />
              </div>
            </div>



            

            <div className="СontentReveal">
              <div className="СontentReveal__mycourse-details">
                {/* //! შენ ისწავლი*/}

                {ReactHtmlParser(MyCourseContent.rawHtml)}

                {/* //! ინსტრუქტორის შესახებ */}

                <h1 className="f-size-h8">
                  ინსტრუქტორის ონფორმაცია
                </h1>

                <br />
                <br />
                <br />
                <div className="instructor_profile">
                  {MyCoursesJson.instructors.instructor.map((instructorInfo,i) => (
                    <>
                      <div className="instructor_profile__info" key={i}>
                        <div className="instructor_profile__info--pic" style={{backgroundImage:`url(${instructorInfo.imageUrl})`}}></div>
                        <div className="instructor_profile__info--about">
                          <p>
                            <strong>{instructorInfo.userName}</strong>
                          </p>

                          <NextLink route="/courses">
                            <strong>({instructorInfo.numberOfCourses}) კურსი</strong>
                          </NextLink>

                          <div className="students">
                            <NextLink route="/students">
                              <strong>({instructorInfo.numberOfStudents}) სტუდენტი</strong>
                            </NextLink>
                            <div className="stars" >
                            <Stars  StarWidth={18} numberOfStars={instructorInfo.amountOfStars}/>
                            {/* <p>({instructorInfo.amountOfVotes})</p> */}
                            
                            </div>
                          </div>
                        </div>
                      </div>

                      <br />
                      <br />
                        {ReactHtmlParser(instructorInfo.aboutInstructor)}
                      
                    </>
                  ))}
                </div>

                <br />
                <br />
                <br />
                <br />
                <div className="instructor_btn">
                  <NextLink route="/subs" className="btn Red">
                    <p>
                      <strong>ინსტრუქტორის გამოწერა</strong>
                    </p>
                  </NextLink>
                </div>
              </div>

              <div className="side-menu noselect ">
                <SideMenu
                  id={3}
                  title={"Angular"}
                  courseChapterTime={45}
                  subTitles={subTitles}
                //   handleClick={handleDisplayVideoNameClick}
                />
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default MyCourses;
