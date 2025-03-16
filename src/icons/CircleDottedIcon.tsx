import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleDottedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#circle-dotted-icon_svg__a)"
    >
      <path d="M7.5 4.21v.01M4.21 7.5v.01M3 12v.01M4.21 16.5v.01M7.5 19.79v.01M12 21v.01M16.5 19.79v.01M19.79 16.5v.01M21 12v.01M19.79 7.5v.01M16.5 4.21v.01M12 3v.01" />
    </g>
    <defs>
      <clipPath id="circle-dotted-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCircleDottedIcon;
