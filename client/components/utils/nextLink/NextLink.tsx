import { FC } from "react";
import Link from "next/link";


interface Props {
  route: any,
  inNewTab?: boolean,
  children?: any,
  className?: any
}


const NextLink: FC<Props> = ({ route, inNewTab = false, children, className }) => {
  return (
    <Link href={route}>
      <a
        target={inNewTab ? '_blank' : null}
        style={{ textDecoration: "none" }}
        className={className}
        rel='noreferrer'>
        {children}
      </a>
    </Link>
  );
};


export default NextLink;