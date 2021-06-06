// import { useState } from "react";
// import ReactHtmlParser from "react-html-parser";

//! ===========OUR IMPORTS
import CoursesJson from "../../../../public/json/Courses.json";
import CommentCards from "components/lib/comment_cards/comment_cards";
import QuestionAnswerCards from "components/lib/question-answer/QuestionAnswerCards";
import { MyCourseTabHeading } from "components/pages/myCourse/course_tabs/MyCourseTabHeading";
import Tabs from "components/lib/tabs/Tabs";
import InputCommentCards from "components/lib/comment_cards/inputComment_cards";









const CourseTabContent = () => {
  const questions = CoursesJson.questionAnswers.questionAnswers;
  const userComments = CoursesJson.ratings.ratings;

  return (
    <>
      <div className="section-courses--tablist">
        <div className="section-courses--tablist__container gray-border">
          <Tabs
            tabNamesAndIcons={MyCourseTabHeading}
            rawHtml={[
              "<h1>ამ კურსის სწავლებით შეძლებთ რომ ისწავლოთ javascript</h1><br /><br /><p>კურსის დასაწყისში ვისწავლით თუ რას წარმოადგენს ეს პროგრამირების ენა და რატო გვჭირდება ვებ-დეველოპერებს.</p><br /><br /><br /><p>გავივლით ყველაზე ძირითად თემებს როგორიცაა:</p><br /><ul><li><p>javascrip ენის სინტაქსი და პროგრამირების ძირითადებ</p></li><li><p>რა არის DOM და DOM მანიპულირება</p></li><li><p>ინტერაქიულობის შექმნა</p></li><li><p>სხვა და სხვა ტიპი even-ები და მათი დანიშნულება</p></li><li><p>რთული ინტერაქტივები</p></li></ul><hr /><p>ამ კურსზე შევქმნით თვენი პორფოლიოსთვის პროექტებს რომელიცსაშუალებას მოგცემს რომ დაიწყოთ ამ ინდუსტრიში მუშობა,როგორც კომპანიაში ასევე თვენივე ბიზნესში.</p><br /><br /><br /><img></img><br /><br/><p>ეს არის ერთერთი პროექტის სურათი რომელსაც ჩვენ გავაკეთებთდა ყველა ელემენტს დიდი ყურადღებას მივაქცევთ და საჭირო ელემენტებს გავდით ინტერაქტულს რათა თქვენმა მომხმარებელმა მაქსიმალურად დიდხანს ისარგებლოს თვენი საიტის სერვისით და შდაბეჭდილება მოახდინოს.</p><br /><br /><br /><p><span>იმ შემთხვევაში თუ არ იცით რა არის HTML ან CSS</span>შეგიძლიათ ნახოთ ჩემი სხვა კურსი სადაც დეტალურად ვხსნი ამ ორ ენას </p>",
              "",
              '<h1>ვიდეოზე ნახსენები საიტების და დამატებითი რესურსების ლინკები, ასევე ამ ვიდეოში დაწერილი კოდის ფაილები</h1><br/><p>vs code გადმოსაწერილი ლინკი : <a href="https://vscode.com">https://vscode.com</a></p> <p>ვიდეოში ნანახი ბლოგპოსტის ლინკი: <a href="https://medium.com"> https://medium.com</a></p>',
              "",
            ]}
            component={[
              null,
              <>
                {questions.map((data) => (
                  <QuestionAnswerCards
                    id={data.id}
                    key={data.id}
                    imageUrl={data.imageUrl}
                    userName={data.userName}
                    text={data.text}
                    replies={data.replies}
                  />
                ))}
              </>,
              null,

              <>
              <InputCommentCards
                    id={1}
                    key={1}
                    name={"ბექა არაბიძე"}
                    rating={2}
                    // imageUrl="https://images.pexels.com/photos/3310695/pexels-photo-3310695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                />
                {userComments.map(rating => (
                
                    <CommentCards
                      key={rating.id}
                      id={rating.id}
                      name={rating.userName}
                      registrationDay={rating.datePosted}
                      addedComment={rating.comment}
                      imageUrl={rating.imageUrl}
                      rating={rating.amountOfStars}
                      like={rating.like}
                      dislike={rating.dislike}
                      isLikedByInstructor={rating.isLikedByInstructor}
                    />
                  
                ))}
              </>,
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default CourseTabContent;
