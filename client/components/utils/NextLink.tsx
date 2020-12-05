import {FC} from "react";
import Link from "next/link";


interface Props {
    route:string,
    children?:any,
    className?:string
}


const NextLink:FC<Props> = ({ route,children,className }) => {
  // const { route, title, children } = props;
  return (
    <Link href={route}>
      <a style={{textDecoration:"none"}} className={className}>
        {children}
      </a>
    </Link>
  );
};


export default NextLink;