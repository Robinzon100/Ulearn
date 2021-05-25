
import { ChevronRight } from "react-feather";

import NextLink from "components/utils/nextLink/NextLink";




const MobileSubSubCategory = ({name},props) => {
    return (
        <>
            <li
        className="subSub-category-list--item"
        key={props.key}
      >
        <NextLink route="#" className="link">
          <p className="c-primary-dark f-size-p3 f-weight-r">{name}</p>
        </NextLink>

        <div className="chevron">
          <ChevronRight size={20} />
        </div>
      </li>
        </>
    )
}

export default MobileSubSubCategory
