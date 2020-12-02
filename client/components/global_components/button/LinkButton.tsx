import React, { CSSProperties, ReactNode } from "react";
import Link from "next/link";

interface LinkButtonProps {
  title: string;
  href: string;
  className: string;
  linkStyle?: CSSProperties;
  onClick?: any;
  loading?: boolean;
  icon?: ReactNode;
  iconRight?: ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  title,
  href,
  className,
  linkStyle,
  onClick,
  loading,
  icon,
  iconRight,
}) => {
  return (
    <>
    <Link href={href}>
        <a onClick={onClick} className={className} style={linkStyle}>
          {!loading ? title : "...."}
        </a>
      </Link>
    </>
  );
};

export default LinkButton;
