import * as React from "react";
import type { SVGProps } from "react";
const SvgStarHalf1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#star-half-1_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 17.752 5.83 20.997l1.179-6.873-5-4.867 6.9-1 3.086-6.253z"
      />
    </g>
    <defs>
      <clipPath id="star-half-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStarHalf1;
