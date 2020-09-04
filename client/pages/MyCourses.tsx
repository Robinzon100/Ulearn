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
