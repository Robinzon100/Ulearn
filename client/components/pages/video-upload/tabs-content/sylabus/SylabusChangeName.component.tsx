
import { Edit3, Trash2, ChevronDown } from "react-feather";


interface IChangeName  {
    chapterNumber:number;
    chapterName:string;
    onClick?:any
}




const SylabusChangeName = ({ chapterNumber,chapterName,onClick }:IChangeName) => {
    return (
        <>
            <div className="add-new-chapter">
                
                <div className="change-chapter_name">
                  <div className="chapter-name">
                    <p className="f-size-p3 f-weight-bl">
                      <span className="f-size-h7 f-weight-b">
                          {chapterNumber}. 
                        </span>   {chapterName}
                    </p>
                  </div>
                  <div className="pencil">
                    <Edit3 style={{ opacity: "60%" }} />
                  </div>
                </div>
  
  
  
                <div className="delete-dropdown">
                  <div className="dropdown">
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
