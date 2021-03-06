
import dayjs  from "dayjs";


import NextLink from "components/utils/nextLink/NextLink";
import { ShoppingCart } from "react-feather";


//! ============= INTERFACE
import { PrimaryContentCardHover } from "../../../interfaces/PrimaryContentCardHover.interface";



const CardDetail = ({ id,uuid,name,created_at,difficulty,description}:
    PrimaryContentCardHover) => {


  return (
    <>
      <div className="card_detail--container" key={id}>
        <div className="inside_content">
          <div className="card_detail--container__title">
            
              <p className="f-size-p6">
                {name}
              </p>
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

        <NextLink route={`/course/${uuid}`}>
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
          </NextLink>
      </div>
    </>
  );
};

export default CardDetail;
