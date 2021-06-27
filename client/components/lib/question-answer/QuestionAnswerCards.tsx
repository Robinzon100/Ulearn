import Answer from "./AnswerUserComments";
import Button from "components/lib/button/Button";
import TextArea from "components/lib/textarea/TextArea";
import { useState } from "react";

export interface IQuestionAnswerCards {
  id: number;
  imageUrl?: string;
  userName?: string;
  text?: string;
  likes?: number;
  dislikes?: number;
  replies?: any;
  userId?: string;
}

const QuestionAnswerCards = (
  {id, imageUrl, userName, text, replies }: IQuestionAnswerCards
) => {



  const [answer, setAnswer] = useState<any>(
      { id:id, imageUrl:imageUrl, userName:userName, text:text, replies:replies }
    );

  const [toggleAnswer, setToggleAnswer] = useState(false);
  

//   const handleSubmit = () => {
//     setAnswer([...answer,{
//         id: answer[answer.length - 1].id + 1,
//         imageUrl:"https://www.pexels.com/photo/fashionable-young-female-model-sitting-in-dark-room-and-looking-away-6758064/",
//         userName:"ბექა არაბიძე",
//         text:"ეს რა პროგრამირების ენააა?",
//         replies:[{
//             id: 1,
//             imageUrl:"https://www.pexels.com/photo/fashionable-young-female-model-sitting-in-dark-room-and-looking-away-6758064/",
//             userName:"ბექა არაბიძე",
//             text:"ეს რა პროგრამირების ენააა"
//         }]
//     }]);
//   };





  return (
    <>
      <div className="QuestionAnswerReveal">
        <div className="question-answer" key={id}>
          <div className="main-comment">
            <div
              style={{ backgroundImage: `url(${imageUrl})` }}
              className="main-comment__pic"
            />



            <div className="main-comment__text">
              <div className="about-user">
                <div className="about-user__name">
                  <h1 className="f-size-p3 f-weight-b">{userName}</h1>
                </div>
              </div>



              <div className="user-comment">
                <p className="f-size-p5 f-weight-m">{text}</p>
              </div>




              <div className="answer-container-toggle">
                <Button
                  onClick={() =>
                    setToggleAnswer((toggleAnswer) => !toggleAnswer)
                  }
                  color="white"
                  size="mini"
                  stroke="black"
                  disabled={false}
                  loading={false}
                  width="20rem">
                  <p className="f-weight-r f-size-p7">პასუხის გაცემა</p>
                </Button>
              </div>




              {replies.map((data) => (
                <Answer
                  id={data.id}
                  key={data.id}
                  imageUrl={data.imageUrl}
                  userName={data.userName}
                  text={data.text}
                />
              ))}




              {toggleAnswer && (
                <div className="answer-comment-container">
                  <TextArea
                    className="f-size-p5 f-weight-m send-answer-input"
                    minHeight="15rem"
                    color="white"
                    size="medium"
                    type="text"
                    placeHolder="დაწერე პასუხი"
                    width="100%"
                    disabled={false}
                    name="answer"
                    value={answer.text}
                    onChange={(e) =>
                      setAnswer({ userId: "1", text: e.target.value })
                    }
                  />

                  <Button
                    className="send-answer-btn"
                    // onClick={() => handleSubmit()}
                    color="green"
                    size="medium"
                    disabled={false}
                    loading={false}
                    width="20rem">
                    <p className="f-weight-r f-size-p7">დაწერეთ კომენტარი</p>
                  </Button>
                </div>
              )}


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionAnswerCards;
