import { Clock, Star, Zap } from "react-feather";

import Select from "components/lib/select/select";
import SelectJson from "../../../public/json/Select.json";




interface SortingDropdown {
  type: string;
}



const Dropdowns: React.FC<SortingDropdown> = ({ type }) => {
  const handleSelectChange = (value) => {
    console.log(value);
  };

  return (
    <>
      {type === "date" && (
        <Select
          size="small"
          placeHolder="სირთულე"
          id={1}
          minHeight="19rem"
          options={SelectJson.difficulty}
          onChange={handleSelectChange}
          icon={<Zap size={15} />}
          color="green"
          loading={false}
          disabled={false}
          width="21rem"
        />
      )}

      {type === "rating" && (
        <Select
          size="small"
          placeHolder="რეიტინგი"
          id={2}
          minHeight="18rem"
          options={SelectJson.SelectRatingsOptions}
          onChange={handleSelectChange}
          icon={<Star size={15} />}
          color="yellow"
          loading={false}
          disabled={false}
          width="21rem"
        />
      )}

      {type === "time" && (
        <Select
          size="small"
          placeHolder="ხანგძლივობა"
          id={3}
          minHeight="18rem"
          options={SelectJson.difficulty}
          onChange={handleSelectChange}
          icon={<Clock size={15} />}
          color="red"
          width="24rem"
        />
      )}
    </>
  );
};

export default Dropdowns;
