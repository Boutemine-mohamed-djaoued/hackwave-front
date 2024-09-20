"use client";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { twMerge } from "tailwind-merge";

const Button = ({ children, role = "primary", className, href, type = "button", onClick, isLoading = false }) => {
  const handleclick = () => {
    if (!isLoading && onClick) {
      onClick();
    }
  };

  const loaderStyle = {
    width: "24px",
    height: "24px",
    borderWidth: "3px",
    borderStyle: "dashed solid solid dotted",
    borderColor: "#fff #fff transparent #fff",
    borderRadius: "50%",
    display: "inline-block",
    position: "relative",
    boxSizing: "border-box",
    animation: "rotation 1s linear infinite",
  };

  const afterStyle = {
    content: "''",
    boxSizing: "border-box",
    position: "absolute",
    left: "6px",
    top: "13px",
    border: "6px solid transparent",
    borderRightColor: "#fff",
    transform: "rotate(-40deg)",
  };

  const rotationKeyframes = `
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
  const classes = twMerge(
    "py-2 px-3 uppercase rounded-md font-semibold w-fit flex items-center justify-center gap-2 text-nowrap",
    className,
    role === "primary" ? "bg-accent text-white" : role === "secondary" ? "text-accent border-2 border-accent" : null
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {role === "link" && <IoIosArrowForward className="text-accent" />}
      </Link>
    );
  }
  return (
    <button className={classes} onClick={handleclick} type={type}>
      {children}
      {isLoading && (
        <div className="grid place-content-center">
          <style jsx>{rotationKeyframes}</style>
          <div style={loaderStyle}>
            <div style={afterStyle}></div>
          </div>
        </div>
      )}
    </button>
  );
};
export default Button;
