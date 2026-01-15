import React from "react";
type IconProps = {
    width?: number;
    height?: number;
    color?: string;
};

const LightIcon: React.FC<IconProps> = ({ width = 12, height = 12, color = "white" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.8125 6.125C0.8125 3.00195 3.35156 0.4375 6.47461 0.4375C6.7793 0.4375 7.23633 0.488281 7.51562 0.539062C7.76953 0.589844 7.82031 0.919922 7.5918 1.04688C6.2207 1.83398 5.35742 3.30664 5.35742 4.90625C5.35742 7.69922 7.87109 9.80664 10.6387 9.29883C10.8926 9.24805 11.0449 9.52734 10.8926 9.73047C9.82617 11.0254 8.22656 11.8125 6.47461 11.8125C3.35156 11.8125 0.8125 9.27344 0.8125 6.125Z"
        fill={color}
      />
    </svg>
  );
};


export default LightIcon;
