import React, { Fragment, useState, useRef, useEffect } from "react";

import { Eye, Star, Clipboard, Folder, HelpCircle } from "react-feather";

import BaseLayout from "components/base-layout";

import SideMenu from "components/global_components/side_menu/sideMenu";

import CommentCards from "components/global_components/comment_cards/comment_cards";
import InputCommentCards from "components/global_components/comment_cards/inputComment_cards";

//!================== СOURSE SVGS
// import QuestionAnswer from "components/global_components/svg/course_svg/QuestionAnswer";
// import Description from "components/global_components/svg/course_svg/Description";
// import Resources from "components/global_components/svg/course_svg/Resources";
// import Estimates from "components/global_components/svg/course_svg/Estimates";

export const Courses: React.FC = () => {
  const [placeHolder, setPlaceHolder] = useState<string>("დაწერე რაც გინდა");

  // //! ეს არის რაც მერე ბაზიდან რომ წამოვა ის კონტენტის მაგალითი
  // const [revealContent, setRevealContent] = useState([
  // "beqa",
  // "robo",
  // "levani",
  // "saba"
  // ])
  // //! ეს არის ის სახელები რაც კურსის გვერდზე კატეგორიებს რომ ჰქვია
  // const [names, setNames] = useState([
  // "აღწერა",
  // "კითხვა-პასუხი",
  // "რესურსები",
  // "შეფასებები"
  // ])

  // //! აქ ჩავარდება ყველა ის html რაც წამოვა ბაზიდან
  // const [revealHtml, setRevealHtml] = useState("");
  // //! ეს ყოცველი შემთხვევისთვის იყოს. თუ რამე დეფაულტად იქნება
  // //! ტექსტი თავიდანვე მაგისთვისაა. პაქტობრივად არაფერს აკეთებს ამ წამს
  // const [defaultText, setDefaultText] = useState(true)

  // const getHtml = (e) => {
  // // debugger;
  // if(e.currentTarget.attributes["data-title"]) {
  // //** აქ ვიღებთ ყველა იმს კონტენტს დატა-ატრიბუტის საშუალებით */
  // const htmlContent = e.currentTarget.attributes["data-title"].nodeValue;

  // const currentText = ref.current.childNodes;

  // //** აქ ვარდება ის კონტენტი */
  // setRevealHtml(htmlContent);
  // }
  // }

  return (
    <Fragment>
      <BaseLayout>
        <div className="courses-page">
          <div className="courses-page--about">
            <div className="courses-page--name">
              <p className="paragraph-light-Noto paragraph-smallest">
                კურსის სახელი
              </p>
            </div>

            <div className="courses-page--about__heading">
              <p className="heading-semi-bold-Noto  paragraph-medium">
                კურსის თავი / კონკრეტული ვიდეოს სახელი
              </p>

              <div className="viewers">
                <Eye size={17} />
                <p className="paragraph-medium-small Eina-semibold">755</p>
              </div>
            </div>
          </div>
          <div className="courses-container">
            <div className="section-courses">
              {/* //! VIDEOPLAYER */}
              <div className="section-courses--video-player"></div>
              {/* //! VIDEOPLAYER */}

              <div className="section-courses--tablist">
                <div className="section-courses--tablist__container gray-border">
                  <div className="tablist_description flex-container four-color-border">
                    {/* //! აქ ბრუნდება კონტენტი */}
                    {/* { revealContent ? names.map((name,index) => (
                        <p data-title={revealContent[index]} onClick={(e)=> {getHtmsetDefaultText(false) }}
                        key={index}
                        >
                        {name}
                        </p>
                        )):null} */}
                    {/* //! აქ ბრუნდება კონტენტი */}

                    <div className="tablist_description--clipboard">
                      <Clipboard style={{ color: "#338EFF" }} />
                    </div>
                    <div className="tablist_description--heading">
                      <p className="heading-semi-bold-Noto paragraph-medium">
                        აღწერა
                      </p>
                    </div>
                  </div>
                  <div className="tablist_question flex-container four-color-border">
                    <div className="tablist_description--question">
                      <HelpCircle style={{ color: "#FF5C4D" }} />
                    </div>
                    <div className="tablist_description--heading">
                      <p className="heading-semi-bold-Noto paragraph-medium">
                        კითხვა-პასუხი
                      </p>
                    </div>
                  </div>

                  <div className="tablist_resources flex-container four-color-border">
                    <div className="tablist_description--folder">
                      <Folder style={{ color: "#00E267" }} />
                    </div>
                    <div className="tablist_description--heading">
                      <p className="heading-semi-bold-Noto paragraph-medium">
                        რესურსები
                      </p>
                    </div>
                  </div>

                  <div className="tablist_rate flex-container four-color-border">
                    <div className="tablist_description--star">
                      <Star style={{ color: "#FFD703" }} />
                    </div>
                    <div className="tablist_description--heading">
                      <p className="heading-semi-bold-Noto paragraph-medium">
                        შეფასებები
                      </p>
                    </div>
                  </div>
                </div>

                {/* //! აქ გამოჩნდება კონტენტი */}
                {/* {revealContent ? defaultText ? revealContent[0] : revealHtml : null} */}

                <div className="courses_content">
                  {/* //! === 4-ეს არის შეფასების ჰტმლი ===*/}

                  {/* <div className="estimates">
                    <div className="estimates__container">
                      <InputCommentCards name={"beqa"} comment={"sdgfg"} />
                      <CommentCards
                        name={"beqa"}
                        registrationDay={1}
                        addedComment={"bla"}
                      />
                    </div>
                  </div> */}

                  {/* //! === 4-ეს არის შეფასების ჰტმლი ===*/}

                  {/* //! === 3-ეს არის რესურსების ჰტმლი ===*/}
                  {/* <div className="resources">
                    <h1>
                      ვიდეოზე ნახსენები საიტების და დამატებითი რესურსების
                      ლინკები, ასევე ამ ვიდეოში დაწერილი კოდის ფაილები
                    </h1>

                    <p className="paragraph-regular-Noto paragraph-medium-small">
                      vs code გადმოსაწერილი ლინკი:
                      <a href="#">https://vscode.com</a>
                    </p>
                    <p className="paragraph-regular-Noto paragraph-medium-small">
                      ვიდეოში ნანახი ბლოგპოსტის ლინკი:
                      <a href="#">https://medium.com</a>
                    </p>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <h1 className="heading-bold-Noto paragraph-medium-small">
                      ამ ვიდეოში დაწერილი კოდის ფაილი:
                    </h1>
                    <br />
                    <br />
                    <div className="resources_files">
                      <div className="files">
                        <a href="#" className="btn btn-for-video-files">
                          <h1>დავალების ფაილები</h1>
                        </a>
                        <div className="folder-icon icon">
                          <Folder
                            style={{ fill: "#FFFFFF", color: "#FFFFFF" }}
                            size={50}
                          />
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {/* //! === 3-ეს არის რესურსების ჰტმლი ===*/}

                  {/* //! === 2-ეს არის კითხვა-პასუხის ჰტმლი ===*/}

                  {/* <div className="question-answer">
                    <div className="main-comment">
                      <div className="main-comment__pic"></div>

                      <div className="main-comment__text">
                        <div className="about-user">
                          <div className="about-user__name">
                            <h1>სახელა სახელაშვილი</h1>
                          </div>
                          <div className="about-user__time">
                            <p>(1 წლის წინ)</p>
                          </div>
                        </div>
                        <div className="user-comment">
                          <p>
                            ვინმეს შეუძლია რომ დამეხმაროს კოდში ? რატომღაც როცა
                            ვაკეთებ console log(“welo world”) რათომღაც არ მიწერს
                            არაფერს
                          </p>
                        </div>

                        <div className="user-answer">
                          <a
                            href="#"
                            className="btn btn-black heading-bold-Noto paragraph-medium-small"
                          >
                            პასუხის გაცემა
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="sub-comment">
                      <div className="sub-comment__pic"></div>

                      <div className="sub-comment__text">
                        <div className="about-user">
                          <div className="about-user__name">
                            <h1>სახელა სახელაშვილი</h1>
                          </div>
                          <div className="about-user__time">
                            <p className="paragraph-light-Noto paragraph-medium-small">
                              (1 წლის წინ)
                            </p>
                          </div>
                        </div>
                        <div className="user-comment">
                          <p className="paragraph-regular-Noto paragraph-medium-small">
                            ვინმეს შეუძლია რომ დამეხმაროს კოდში ? რატომღაც როცა
                            ვაკეთებ console log(“welo world”) რათომღაც არ მიწერს
                            არაფერს
                          </p>
                        </div>

                        <div className="user-answer">
                          <a
                            href="#"
                            className="btn btn-black heading-bold-Noto paragraph-medium-small"
                          >
                            პასუხის გაცემა
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* //! === 2-ეს არის კითხვა-პასუხის ჰტმლი ===*/}

                  {/* //! === 1-ეს არის აღწერის ჰტმლი ===*/}

                  <h1>ამ კურსის სწავლებით შეძლებთ რომ ისწავლოთ javascript</h1>
                  <br />
                  <br />
                  <p>
                    კურსის დასაწყისში ვისწავლით თუ რას წარმოადგენს ეს
                    პროგრამირების ენა და რატო გვჭირდება ვებ-დეველოპერებს.
                  </p>
                  <br />
                  <br />
                  <br />
                  <p>გავივლით ყველაზე ძირითად თემებს როგორიცაა:</p>
                  <br />
                  <ul>
                    <li>
                      <p>javascrip ენის სინტაქსი და პროგრამირების ძირითადებ</p>
                    </li>
                    <li>
                      <p>რა არის DOM და DOM მანიპულირება</p>
                    </li>
                    <li>
                      <p>ინტერაქიულობის შექმნა</p>
                    </li>
                    <li>
                      <p>სხვა და სხვა ტიპი even-ები და მათი დანიშნულება</p>
                    </li>
                    <li>
                      <p>რთული ინტერაქტივები</p>
                    </li>
                  </ul>
                  <hr />
                  <p>
                    ამ კურსზე შევქმნით თვენი პორფოლიოსთვის პროექტებს რომელიც
                    საშუალებას მოგცემს რომ დაიწყოთ ამ ინდუსტრიში მუშობა, როგორც
                    კომპანიაში ასევე თვენივე ბიზნესში.
                  </p>
                  <div className="portfolio-pic"></div>
                  <p>
                    ეს არის ერთერთი პროექტის სურათი რომელსაც ჩვენ გავაკეთებთ და
                    ყველა ელემენტს დიდი ყურადღებას მივაქცევთ და საჭირო
                    ელემენტებს გავდით ინტერაქტულს რათა თქვენმა მომხმარებელმა
                    მაქსიმალურად დიდხანს ისარგებლოს თვენი საიტის სერვისით და
                    შდაბეჭდილება მოახდინოს.
                  </p>
                  <br />
                  <br />
                  <br />
                  <p>
                    <span>იმ შემთხვევაში თუ არ იცით რა არის HTML ან CSS</span>{" "}
                    შეგიძლიათ ნახოთ ჩემი სხვა კურსი სადაც დეტალურად ვხსნი ამ ორ
                    ენას
                  </p>
                  <div className="other_courses"></div>
                  {/* //! აქ გამოჩნდება კონტენტი */}
                </div>
              </div>
            </div>

            <SideMenu />
          </div>
        </div>
      </BaseLayout>
    </Fragment>
  );
};

export default Courses;
