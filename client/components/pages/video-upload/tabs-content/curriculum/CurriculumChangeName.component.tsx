
import { Edit3, Trash2,ChevronDown } from "react-feather";
import { useState } from "react";


import Input from "components/lib/inputs/Input"

interface IChangeName  {
    chapterNumber:number;
    chapterName:string;
    onClick?:any;
    onToggle?:any;
}




const SylabusChangeName = ({ chapterNumber,chapterName,onClick,onToggle }:IChangeName) => {

    const [isEditable,] = useState(false);


    return (
        <>
            <div className="add-new-chapter">
                
                <div className="change-chapter_name">


                  <div className="chapter-name">
                    {isEditable ? (
                        <Input
                        autoComplate="off"
                        className={`f-size-p4 f-weight-b ${!isEditable ? "remove_input_styles" : ""}`}
                        color="white"
                        size="medium"
                        type="text"
                        placeHolder={chapterName}
                        width="100%"
                        isFocused={true}
                        readonly={!isEditable ? true : false}
                      />
                    ):<p className="f-size-p3 f-weight-bl">
                    <span className="f-size-h7 f-weight-b">
                        {chapterNumber}. 
                      </span>   {chapterName}
                  </p>}

                      
                    
                  </div>
                  <div className="pencil">
                    <Edit3 style={{ opacity: "60%" }} />
                  </div>
                </div>
  
  
  
                <div className="delete-dropdown">

                  <div className="dropdown" onClick={onToggle}>
                      <ChevronDown 
                          color={"var(--secondary-darkest-gray)"} 
                          style={{ opacity: "60%" }}
                          size={35} 
                      />
                  </div>
  
                  <div className="delete" onClick={onClick}>
                      <Trash2 color={"var(--primary-white)"} size={25} />
                  </div>
                </div>
                
              </div>
        </>
    )
}

export default SylabusChangeName
