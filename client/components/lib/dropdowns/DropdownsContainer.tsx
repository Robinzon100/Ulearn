
import { Search } from "react-feather";

import Input from "components/lib/inputs/Input";
import SortingDropdown from "./Dropdowns";
import { useRouter } from 'next/router';


const DropdownsContainer = () => {
  const router = useRouter()

  return (
    <>
      <div className="main_content--input">
        <Input
          color="white"
          size="large"
          type="text"
          placeHolder="მოძებნე სასურველი კურსი"
          icon={<Search size={22} />}
          className=""
          width="100%"
          onKeyDown={(e) => {
            if (e.key === 'Enter')
              router.push(`/courses?search=${e.currentTarget.value}`)
          }}
        />

        <div className="main_content--selects">
          <SortingDropdown type="date" />
          <SortingDropdown type="rating" />
          <SortingDropdown type="time" />
        </div>
      </div>
    </>
  )
}


export default DropdownsContainer;