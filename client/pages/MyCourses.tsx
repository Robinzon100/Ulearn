import React, { Fragment } from "react";

import BaseLayout from "components/base-layout";

import SideMenu from "components/sideMenu";

const MyCourses: React.FC = () => {


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
    




  return (
    <Fragment>
      <BaseLayout>
        <section className="mycourses">
          <div className="mycourses__container">
            <div className="mycourses-hero">
              <div className="mycourses-hero__about-course">
                <div className="mycourses-hero__about-course--heading">
                  <p className="heading-bold-Noto heading-3_5">
                    როგორ გახდე DJ, DJ პროფესიის შესწავლა პროფესიულ დონეზე.
                  </p>
                </div>
                <div className="mycourses-hero__about-course--paragraph">
                  <p className="paragraph-regular-Noto paragraph-small line-height">
                    გავივლით DJ-ის პროფესიის ყველა ნიუანს, რას აკეთებს რეალრად
                    DJ რა ევალება ნებისმიერ დაწესებულებაში და ასევე შევქმნით
                    რამოდენიმე ტრეკს რომლის გაყიდვას და გაპიარებასაც შეძლებთ
                  </p>
                </div>
                <div className="mycourses-hero__about-course--btns">
                  <div className="buy-course">
                    <a
                      href="#"
                      className="btn btn-green heading-semi-bold-Noto paragraph-medium-small"
                    >
                      კურსის შეძენა
                    </a>
                  </div>
                  <div className="save-bucket">
                    <a
                      href="#"
                      className="btn btn-yellow heading-semi-bold-Noto paragraph-medium-small"
                    >
                      კალათაში შენახვა
                    </a>
                  </div>
                </div>
              </div>
              <div className="mycourses-hero__rating-course">
                  
              </div>
            </div>

            <div className="СontentReveal">
              <div className="mycourses-content__course-details">
                {/* //! შენ ისწავლი*/}

                <h1 className="heading-bold-Noto heading-6">
                  რას ისწავლი ამ კურსზე
                </h1>

                <ul className="details_list">
                  <div>
                    <li>
                      <div className="checked "></div>
                      <p>გარემიქსებას ნებისმიერი მუსიკის</p>
                    </li>
                    <li>
                      <div className="checked"></div>

                      <p>DJ-ის მოწყობილობების გამოყენება</p>
                    </li>
                    <li>
                      <div className="checked"></div>

                      <p>მუსიკის იზოლირება სიმღერიდან</p>
                    </li>
                  </div>
                  <div>
                    <li>
                      <div className="checked"></div>

                      <p>მუსიკის გადაკეთება და რა არის BPS</p>
                    </li>
                    <li>
                      <div className="checked"></div>

                      <p>საუკეთესო პრაქტიკები</p>
                    </li>
                    <li>
                      <div className="checked"></div>

                      <p>
                        როგორ მოძებნო კლიენტი და გაყიდო თქვენი მუსიკა და
                        სერვისები
                      </p>
                    </li>
                  </div>
                </ul>

                <hr className="mycourse-line learning-list__line"></hr>

                {/* //! ჩემი კურსების შესახებ */}

                <h1>დეტალები კურსის შესახებ</h1>

                <br />
                <br />
                <br />

                <p>
                  <strong>
                    ამ კურსის სწავლებით შეძლებთ რომ ისწავლოთ javascript
                  </strong>
                </p>

                <br />
                <br />

                <p>
                  კურსის დასაწყისში ვისწავლით თუ რას წარმოადგენს ეს
                  პროგრამირების ენა და რატო გვჭირდება ვებ-დეველოპერებს.
                </p>

                <br />
                <br />
                <br />

                <h1>გავივლით ყველაზე ძირითად თემებს როგორიცაა:</h1>

                <br />
                <br />

                <div className="list">
                  <ul>
                    <li>
                      <p className="paragraph-regular-Noto paragraph-medium-small">
                        javascrip ენის სინტაქსი და პროგრამირების ძირითადებ
                      </p>
                    </li>
                    <li>
                      <p className="paragraph-regular-Noto paragraph-medium-small">
                        რა არის DOM და DOM მანიპულირება
                      </p>
                    </li>
                    <li>
                      <p className="paragraph-regular-Noto paragraph-medium-small">
                        ინტერაქიულობის შექმნა
                      </p>
                    </li>
                    <li>
                      <p className="paragraph-regular-Noto paragraph-medium-small">
                        სხვა და სხვა ტიპი even-ები და მათი დანიშნულება
                      </p>
                    </li>
                    <li>
                      <p className="paragraph-regular-Noto paragraph-medium-small">
                        რთული ინტერაქტივები
                      </p>
                    </li>
                  </ul>
                </div>

                <br />
                <br />
                <br />
                

                <p>
                  ამ კურსზე შევქმნით თვენი პორფოლიოსთვის პროექტებს რომელიც
                  საშუალებას მოგცემს რომ დაიწყოთ ამ ინდუსტრიში მუშობა, როგორც
                  კომპანიაში ასევე თვენივე ბიზნესში.
                </p>

                <hr className="mycourse-line learning-list__line"></hr>

                {/* //! ინსტრუქტორის შესახებ */}

                <h1 className="heading-bold-Noto heading-6">
                  ინსტრუქტორის ონფორმაცია
                </h1>

                <br />
                <br />
                <br />
                <div className="instructor_profile">
                  <div className="instructor_profile--pic"></div>
                  <div className="instructor_profile--about">
                    <p>ბექა არაბიძე</p>

                    <a href="#">(23) კურსი</a>

                    <div className="students">
                      <a href="#">(5232) სტუდენტი</a>
                      <div className="stars"></div>
                    </div>
                  </div>
                </div>
                <br />
                <br />

                <p>
                  ვარ fullstack დეველოპერი რომესაც აქვს წლების გამოცდილება,
                  როგორც front-end დეველოპმენტში ასევე back-end დეველოპმენტში,
                  ვცხოვრობ რუსთავში და მაქვს უმაღლესი განათლება მიღებული
                  ქართულ-ამერიკულ უნივერსიტეტში.
                </p>
                <br />
                <br />
                <p>
                  ჩემი ერთ-ერთი ყველაზე დიდი პროექტი არის სწორედ ეს საიტი სადაც
                  ნებისმიერი შეძლებს ქართული რესურსებით ისწავლოს ნებისმიერი
                  პროფესია ან ჰობი.
                </p>

                <br />
                <br />
                <br />
                <br />
                <div className="instructor_btn">
                  <a href="#" className="btn btn-red">
                 
                      <p>ინსტრუქტორის გამოწერა</p>
                  </a>
                </div>
              </div>

              <div className="side-menu noselect ">
                <SideMenu
                  id={3}
                  title={"Angular"}
                  courseChapterTime={45}
                  subTitles={subTitles}
                  subTaskTime={5}
                />
              </div>
            </div>
          </div>
        </section>
      </BaseLayout>
    </Fragment>
  );
};

export default MyCourses;
