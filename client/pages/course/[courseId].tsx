import { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { GetServerSideProps } from "next";

import { ShoppingCart } from "react-feather";
import NextLink from "components/utils/nextLink/NextLink";

import SideMenu from "components/lib/sidemenu/sideMenu";
import RatingsMenu from "components/pages/myCourse/RatingsMenu";
import Stars from "components/lib/svg/Stars";
import MyCoursesJson from "../../public/json/MyCourses.json";
import Button from "components/lib/button/Button";

import { getCourse } from "actions/client/course/course.index.action";

//! === INTERFACES(DO NOT DELETE)
// import { MyCoursePageContent } from "../interfaces/MyCoursesPage.interface";

const MyCourses = ({ course }) => {
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

//   const [MyCourseContent] = useState(MyCoursesJson.description);

  return (
    <>
      <>
        <section className="mycourses">
          <div className="mycourses__container">
            <div className="mycourses-hero">
              <div className="mycourses-hero__about-course">
                <div className="mycourses-hero__about-course--heading">
                  <p className="f-size-h5">{course.title}</p>
                </div>
                <div className="mycourses-hero__about-course--paragraph">
                  <p className="f-size-p6">{course.description}</p>
                </div>
                <div className="mycourses-hero__about-course--btns">
                  <div className="buy-course">
                    <Button
                      route="/buy_course"
                      onClick={() => console.log("asdasda")}
                      color="green"
                      size="medium"
                      disabled={false}
                      loading={false}>
                      <p className="f-weight-r f-size-p6">კურსის შეძენა</p>
                    </Button>
                  </div>



                  <div className="save-bucket">
                    <Button
                      route="/save-bucket"
                      onClick={() => console.log("asdasda")}
                      color="yellow"
                      size="medium"
                      disabled={false}
                      loading={false}
                      icon={<ShoppingCart />}
                    >
                      <p
                        className="f-weight-r f-size-p6"
                        style={{ marginLeft: "calc(2.5rem + 1vw)" }}
                      >
                        კურსის შენახვა
                      </p>
                    </Button>
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
                <ol>
                  {course.what_will_you_learn.map((data, i) => (
                    <li key={i}>
                      <p>{data}</p>
                    </li>
                  ))}
                </ol>

                {/* //! ინსტრუქტორის შესახებ */}



                <h1 className="f-size-h8">ინსტრუქტორის ონფორმაცია</h1>

                <br />
                <br />
                <br />
                <div className="instructor_profile">
                  {MyCoursesJson.instructors.instructor.map(
                    (instructorInfo, i) => (
                      <div key={i}>
                        <div className="instructor_profile__info">
                          <div
                            className="instructor_profile__info--pic"
                            style={{
                              backgroundImage: `url(${instructorInfo.imageUrl})`,
                            }}
                          ></div>
                          <div className="instructor_profile__info--about">
                            <p>
                              <strong>{instructorInfo.userName}</strong>
                            </p>

                            <NextLink route="/courses">
                              <strong>
                                ({instructorInfo.numberOfCourses}) კურსი
                              </strong>
                            </NextLink>

                            <div className="students">
                              <NextLink route="/students">
                                <strong>
                                  ({instructorInfo.numberOfStudents}) სტუდენტი
                                </strong>
                              </NextLink>
                              <div className="stars">
                                <Stars
                                  StarWidth={18}
                                  numberOfStars={instructorInfo.amountOfStars}
                                />
                                {/* <p>({instructorInfo.amountOfVotes})</p> */}
                              </div>
                            </div>
                          </div>
                        </div>

                        <br />
                        <br />
                        {ReactHtmlParser(course.detailed_description)}
                      </div>
                    )
                  )}
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

                {course.course_content.map((data,i) => (
                    <SideMenu
                    id={i}
                    title={data.title}
                    courseChapterTime={45}
                    content={data.content}
                    //   handleClick={handleDisplayVideoNameClick}
                  />
                ))}
                
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const course = {
    affiliation_price: 25,
    course_content: [
      {
        content: [
          {
            duration: 12,
            title: "როგორო მუშაობს ჯავასკრიპტი",
          },
          {
            duration: 12,
            title: "როგორო მუშაობს ჯავასკრიპტი",
          },
        ],
        title: "ჯავასცრიპტის ძირითადები",
      },
    ],
    created_at: "2021-05-11T16:19:29.876Z",
    creator_id: 1,
    deleted_at: null,
    description:
      "გავივლით DJ-ის პროფესიის ყველა ნიუანს, რას აკეთებს რეალრად DJ რა ევალება ნებისმიერ დაწესებულებაში და ასევე შევქმნით რამოდენიმე ტრეკს რომლის გაყიდვას და გაპიარებასაც შეძლებთ",
    detailed_description:
      "<p>ვარ fullstack დეველოპერი რომესაც აქვს წლების გამოცდილება, როგორც front-end დეველოპმენტში ასევე back-end დეველოპმენტში,ვცხოვრობ რუსთავში და მაქვს უმაღლესი განათლება მიღებული ქართულ-ამერიკულ უნივერსიტეტში.</p><br /><br /><p>ჩემი ერთ-ერთი ყველაზე დიდი პროექტი არის სწორედ ეს საიტი სადაც ნებისმიერი შეძლებს ქართული რესურსებით ისწავლოს  ნებისმიერი პროფესია ან ჰობი.</p>",
    detaled_rating: {
      "0": 0,
      "1": 0,
      "2": 2,
      "3": 30,
      "4": 10,
      "5": 0,
    },
    difficulty: 3,
    discount_price: 15,
    duration: 6.3,
    id: 1,
    intro_videoUrl:
      "https://temp.media/video/?height=1080&width=1920&length=10",
    main_category_id: 1,
    overall_rating: 4.5,
    price: 35,
    student_amount: 140,
    sub_category_id: 1,
    sub_sub_category_id: 1,
    thumbnail_imageUrl: "https://picsum.photos/200/300",
    title: "როგორ გახდე DJ, DJ პროფესიის შესწავლა პროფესიულ დონეზე.",
    ulearn_coin_price: 200,
    units_sold: 25,
    updated_at: "2021-05-11T16:19:29.876Z",
    uuid: "5cd940f4-40d8-4e34-b37b-316c1df9ef13",
    what_will_you_learn: [
      "გარემიქსებას ნებისმიერი მუსიკის",
      "DJ-ის მოწყობილობების გამოყენება",
      "მუსიკის იზოლირება სიმღერიდან",
      "მუსიკის გადაკეთება და რა არის BPS",
      "საუკეთესო პრაქტიკები",
      "როგორ მოძებნო კლიენტი და გაყიდო თქვენი მუსიკა და სერვისები",
    ],
  };

  const res = await getCourse(ctx.params);

  // if (res != 'error') {
  //     return {
  //         redirect: {
  //             destination: '/',
  //             permanent: false,
  //         },
  //     }
  // }

  return {
    props: {
      course: course,
    },
  };
};

export default MyCourses;
