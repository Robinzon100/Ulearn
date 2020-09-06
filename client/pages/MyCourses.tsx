import React, { Fragment } from "react";

import BaseLayout from "components/base-layout";

import SideMenu from "components/global_components/side_menu/sideMenu";

const MyCourses: React.FC = () => {
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
                  <p className="paragraph-regular-Noto paragraph-small">
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
              <div className="mycourses-hero__raiting-course"></div>
            </div>

            <div className="mycourses-content">
              <div className="mycourses-content__course-details">
                {/* //! შენ ისწავლი*/}
                <div className="you-learn">
                  <div className="you-learn--heading">
                    <p className="heading-bold-Noto heading-6">
                      რას ისწავლი ამ კურსზე
                    </p>
                  </div>
                  <div className="you-learn--list">
                    <ul>
                      <div>
                        <li>
                          <div className="checked details_finished"></div>
                          <p className="paragraph-regular-Noto paragraph-medium-small">
                            გარემიქსებას ნებისმიერი მუსიკის
                          </p>
                        </li>
                        <li>
                          <div className="checked details_finished"></div>

                          <p className="paragraph-regular-Noto paragraph-medium-small">
                            DJ-ის მოწყობილობების გამოყენება
                          </p>
                        </li>
                        <li>
                          <div className="checked details_finished"></div>

                          <p className="paragraph-regular-Noto paragraph-medium-small">
                            მუსიკის იზოლირება სიმღერიდან
                          </p>
                        </li>
                      </div>
                      <div>
                        <li>
                          <div className="checked details_finished"></div>

                          <p className="paragraph-regular-Noto paragraph-medium-small">
                            მუსიკის გადაკეთება და რა არის BPS
                          </p>
                        </li>
                        <li>
                          <div className="checked details_finished"></div>

                          <p className="paragraph-regular-Noto paragraph-medium-small">
                            საუკეთესო პრაქტიკები
                          </p>
                        </li>
                        <li>
                          <div className="checked details_finished"></div>

                          <p className="paragraph-regular-Noto paragraph-medium-small">
                            როგორ მოძებნო კლიენტი და გაყიდო თქვენი მუსიკა და
                            სერვისები
                          </p>
                        </li>
                      </div>
                    </ul>
                  </div>
                  <div className="mycourse-line learning-list__line"></div>
                </div>
                {/* //! ჩემი კურსების შესახებ */}
                <div className="about_mycourse">
                  <div className="about_mycourse--heading">
                    <p className="heading-bold-Noto heading-6">
                      დეტალები კურსის შესახებ
                    </p>
                  </div>
                  <br />
                  <div className="about_mycourse--paragraph">
                    <p className="heading-semi-bold-Noto paragraph-regular">
                      ამ კურსის სწავლებით შეძლებთ რომ ისწავლოთ javascript
                    </p>
                    <br />
                    <p className="paragraph-regular-Noto paragraph-medium-small">
                      კურსის დასაწყისში ვისწავლით თუ რას წარმოადგენს ეს
                      პროგრამირების ენა და რატო გვჭირდება ვებ-დეველოპერებს.
                    </p>
                  </div>
                  <br />
                  <br />
                  <br />
                  <div className="about_mycourse--list">
                    <div className="about_mycourse--list__heading">
                      <p className="heading-bold-Noto paragraph-medium-small ">
                        გავივლით ყველაზე ძირითად თემებს როგორიცაა:
                      </p>
                    </div>
                    <br />

                    <div className="list">
                      <ul>
                        <li className="paragraph-regular-Noto paragraph-medium-small">
                          javascrip ენის სინტაქსი და პროგრამირების ძირითადებ
                        </li>
                        <li className="paragraph-regular-Noto paragraph-medium-small">
                          რა არის DOM და DOM მანიპულირება
                        </li>
                        <li className="paragraph-regular-Noto paragraph-medium-small">
                          ინტერაქიულობის შექმნა
                        </li>
                        <li className="paragraph-regular-Noto paragraph-medium-small">
                          სხვა და სხვა ტიპი even-ები და მათი დანიშნულება
                        </li>
                        <li className="paragraph-regular-Noto paragraph-medium-small">
                          რთული ინტერაქტივები
                        </li>
                      </ul>
                    </div>

                    <br />
                    <br />
                    <br />
                    <br />

                    <div className="about_mycourse--list__paragraph">
                      <p className="paragraph-regular-Noto paragraph-medium-small ">
                        ამ კურსზე შევქმნით თვენი პორფოლიოსთვის პროექტებს რომელიც
                        საშუალებას მოგცემს რომ დაიწყოთ ამ ინდუსტრიში მუშობა,
                        როგორც კომპანიაში ასევე თვენივე ბიზნესში.
                      </p>
                    </div>
                  </div>
                  <div className="mycourse-line learning-list__line"></div>
                </div>

                {/* //! ინსტრუქტორის შესახებ */}
                <div className="about_instructor">
                  <div className="about_instructor--heading">
                    <p className="heading-bold-Noto heading-6">
                      ინსტრუქტორის ონფორმაცია
                    </p>
                  </div>
                  <br />
                  <br />
                  <br />
                  <div className="instructor_profile">
                    <div className="instructor_profile--pic"></div>
                    <div className="instructor_profile--about">
                      <div className="name">
                        <p className="heading-bold-Noto paragraph-medium">
                          ბექა არაბიძე
                        </p>
                      </div>
                      <div className="course">
                        <a
                          href="#"
                          className="heading-semi-bold-Noto paragraph-smallest"
                        >
                          (23) კურსი
                        </a>
                      </div>
                      <div className="students">
                        <a
                          href="#"
                          className="heading-semi-bold-Noto paragraph-smallest"
                        >
                          (5232) სტუდენტი
                        </a>
                        <div className="stars"></div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="instructor_comment">
                    <div className="">
                      <p className="paragraph-regular-Noto  paragraph-medium-small">
                        ვარ fullstack დეველოპერი რომესაც აქვს წლების
                        გამოცდილება, როგორც front-end დეველოპმენტში ასევე
                        back-end დეველოპმენტში, ვცხოვრობ რუსთავში და მაქვს
                        უმაღლესი განათლება მიღებული ქართულ-ამერიკულ
                        უნივერსიტეტში.
                      </p>
                      <br />
                      <br />
                      <p className="paragraph-regular-Noto  paragraph-medium-small">
                        ჩემი ერთ-ერთი ყველაზე დიდი პროექტი არის სწორედ ეს საიტი
                        სადაც ნებისმიერი შეძლებს ქართული რესურსებით ისწავლოს
                        ნებისმიერი პროფესია ან ჰობი.
                      </p>
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="instructor_btn">
                    <a
                      href="#"
                      className="btn btn-red heading-bold-Noto paragraph-medium-small"
                    >
                      ინსტრუქტორის გამოწერა
                    </a>
                  </div>
                </div>
              </div>
              <div className="mycourses-content__side-menu">
                <SideMenu />
              </div>
            </div>
          </div>
        </section>
      </BaseLayout>
    </Fragment>
  );
};

export default MyCourses;
