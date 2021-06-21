import ReactHtmlParser from "react-html-parser";
import { GetServerSideProps } from "next";
import { ShoppingCart } from "react-feather";




import NextLink from "components/utils/nextLink/NextLink";
import SideMenu from "components/lib/sidemenu/sideMenu";
import RatingsMenu from "components/pages/course/RatingsMenu";
import Stars from "components/lib/svg/Stars";
import MyCoursesJson from "../../public/json/MyCourses.json";
import Button from "components/lib/button/Button";
import Line from "components/lib/line/Line";

//! ─── ACTIONS ────────────────────────────────────────────────────────────────────
import { getCourse } from "actions/client/course/course.index.action";





const course = ({ course }) => {
  return (

      <>
        <section className="course">
          <div className="course__container">
            <div className="course-hero" 
            style={{ backgroundImage: `url(${course.thumbnail_imageUrl})` }}> 
            <div className="course-hero-blur"></div>

              <div className="course-hero__about-course">

                <div className="course-hero__about-course--heading">
                  <p className="f-size-h5 f-weight-b">{course.title}</p>
                </div>

                <div className="course-hero__about-course--paragraph">
                  <p className="f-size-p6 f-weight-l">{course.description}</p>
                </div>


                <div className="course-hero__about-course--btns">
                  <div className="buy-course">
                    <Button
                      route="/buy_course"
                      width="100%"
                      maxWidth="35rem"
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
                      width="100%"
                      maxWidth="35rem"
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
              <div className="course-hero__rating-course">
                <RatingsMenu
                  difficulty={course.difficulty}
                  student_amount={course.student_amount}
                  overall_rating={course.overall_rating}
                  detailed_rating={course.detailed_rating}
                  duration={course.duration}
                />
              </div>
            </div>

            <div className="СontentReveal course_info">
              <div className="course_info__mycourse-details">
                {/* //! შენ ისწავლი*/}

                <div className="detailed_description">

                <h1 className="f-size-h7 f-weight-b ">
                    რას ისწავლი ამ კურსზე
                  </h1>
                  
                  <ol>
                    {course.what_will_you_learn.map((data, i) => (
                      <li key={i}>
                        <p>{data}</p>
                      </li>
                    ))}
                  </ol>

                  <Line
                  width="80%"
                  thickness="1px"
                  color="#c9c9c9"
                  borderRadius="10px"
                  margin="6rem"
                />

                  <h1 className="f-size-h7 f-weight-r course-detail_heading">
                    დეტალები კურსის შესახებ
                  </h1>
                  <br />
                  <br />

                  {ReactHtmlParser(course.detailed_description)}
                </div>

                <Line
                  width="80%"
                  thickness="1px"
                  color="#c9c9c9"
                  borderRadius="10px"
                  margin="6rem"
                />

                {/* //! ინსტრუქტორის შესახებ */}

                <div className="instructor_profile">
                  <h1 className="f-size-h7 f-weight-b">ინსტრუქტორის ონფორმაცია</h1>

                  {MyCoursesJson.instructors.instructor.map(
                    (instructorInfo, i) => (
                      <div className="instructor_profile__info" key={i}>
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
                            <strong >
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
                                starWidth={18}
                                numberOfStars={instructorInfo.amountOfStars}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>

                <div className="instructor_btn">
                  <Button
                    route="/buy_course"
                    width="100%"
                    maxWidth="35rem"
                    onClick={() => console.log("asdasda")}
                    color="red"
                    size="medium"
                    disabled={false}
                    loading={false}
                  >
                    <p className="f-weight-b">
                      ინსტრუქტორის გამოწერა
                    </p>
                  </Button>
                </div>
              </div>

              <div className="side-menu noselect ">
                {course.course_content.curriculum.map((data, i) => (
                  <SideMenu
                    id={i}
                    key={i}
                    name={data.name}
                    courseChapterTime={45}
                    content={data.sub_videos}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { courseId } = ctx.params;
  const { course, statusCode } = await getCourse(courseId);


  if (statusCode != 200) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      course,
    },
  };
};

export default course;
