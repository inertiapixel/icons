import * as React from "react";
import type { SVGProps } from "react";
const SvgBadgesOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#badges-off-icon_svg__a)"
    >
      <path d="M14.505 14.497 12 16l-5-3v4l5 3 5-3M13.873 9.876 17 8V4l-5 3-2.492-1.495M7 7v1l2.492 1.495M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="badges-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBadgesOffIcon;
