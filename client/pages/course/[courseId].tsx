import ReactHtmlParser from "react-html-parser";
import { GetServerSideProps } from "next";

import { ShoppingCart } from "react-feather";
import NextLink from "components/utils/nextLink/NextLink";

import SideMenu from "components/lib/sidemenu/sideMenu";
import RatingsMenu from "components/pages/myCourse/RatingsMenu";
import Stars from "components/lib/svg/Stars";
import MyCoursesJson from "../../public/json/MyCourses.json";
import Button from "components/lib/button/Button";



//! ─── ACTIONS ────────────────────────────────────────────────────────────────────
import { getCourse } from "actions/client/course/course.index.action";




const course = ({ course }) => {
 


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
                <RatingsMenu
                    difficulty={course.difficulty}
                    student_amount={course.student_amount}
                    overall_rating={course.overall_rating}
                    detailed_rating={course.detailed_rating}
                    duration={course.duration}
                />
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
              {/* TODO /// აქ აგდებს Warning: Each child in a list should have a unique "key" prop.*/}
                {course.course_content.map((data, i) => (
                  <SideMenu
                    id={i}
                    title={data.title}
                    courseChapterTime={45}
                    content={data.content}
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
  const { courseId } = ctx.params
  const { course, statusCode } = await getCourse(courseId);

  if (statusCode != 200) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      course
    },
  };
};

export default course;
