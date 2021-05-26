
import dayjs  from "dayjs";


import NextLink from "components/utils/nextLink/NextLink";
import { ShoppingCart, Check } from "react-feather";
import { stringToCut } from "components/utils/helpers/stringToCut";



//! ============= INTERFACE
import { PrimaryContentCardHover } from "../../../interfaces/PrimaryContentCardHover.interface";



const CardDetail = ({ id,name,created_at,difficulty,description}:
    PrimaryContentCardHover) => {


  return (
    <>
      <div className="card_detail--container" key={id}>
        <div className="inside_content">
          <div className="card_detail--container__title">
            <NextLink route={`/course/${id}`}>
              <p className="f-size-p4">
                {stringToCut(name, 25)}
              </p>
            </NextLink>
          </div>
          <div className="card_detail--container__date">
            <p
              className="f-size-p7"
              style={{ color: "#00E267" }}>
              დაიდო:
              <span className="f-size-p6est">{dayjs(created_at).format('YYYY/MM/DD')}</span>
            </p>
            <p
              className="f-size-p7"
              style={{ color: "#636469" }}>
              სირთულე:

              {difficulty == 1 && <span style={{ color: "#16c93e" }}>მარტივი</span>}

              {difficulty == 2 && <span style={{ color: "#ffd703" }}>საშუალო</span>}

              {difficulty == 3 && <span style={{ color: "#ff5c4d" }}>რთული</span>}


              
            </p>
          </div>
          <div className="card_detail--container__description">
            <p className="f-size-p6">{description}</p>
          </div>


        </div>

        <a href="#">
          <div className="card_detail--container__addtobucket">
            <div className="heading">
              <p className="f-size-p4">
                კალათაში დამატება
              </p>
            </div>
            <div className="shoppingCart">
              <ShoppingCart
                style={{ color: "#ffffff", fontWeight: "bold" }}
                size={25}
              />
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default CardDetail;
