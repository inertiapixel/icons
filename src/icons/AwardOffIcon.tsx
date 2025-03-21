import * as React from "react";
import type { SVGProps } from "react";
const SvgAwardOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#award-off-icon_svg__a)"
    >
      <path d="M16.719 12.706a6 6 0 0 0-8.433-8.418m-1.755 2.24a6 6 0 0 0 7.936 7.944" />
      <path d="m12 14.999 3.4 5.89 1.598-3.233.707.046m1.108-2.902L17.196 12M6.802 12l-3.4 5.89L7 17.657l1.598 3.232 3.4-5.889M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="award-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAwardOffIcon;
