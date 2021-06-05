
import { IQuestionAnswerCards } from "./QuestionAnswerCards";

interface Answer extends IQuestionAnswerCards {}




const Answer = (
  { imageUrl, userName, text }: Answer,
  props
) => {
  return (
    <>
      <div className="sub-comment" key={props.key}>
        <div
          style={{backgroundImage: `url(${imageUrl})`}}
          className="sub-comment__pic"
        />



        <div className="sub-comment__text">
          <div className="about-user">
            <div className="about-user__name">
              <h1 className="f-size-p3 f-weight-b">{userName}</h1>
            </div>
          </div>



          <div className="user-comment">
            <p className="f-size-p5 f-weight-m">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Answer;
