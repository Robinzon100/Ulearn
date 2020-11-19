import React from 'react'
import Link from "next/link";

export const NextLink = ({route,title}) => {
    // const { route, title, children } = props;
    return (
      <Link href={route}>
        <a className="menu--list--items--links  paragraph-regulars paragraph-small">
          {title}
          {/* {children} */}
        </a>
      </Link>
    );
  };

export default NextLink;