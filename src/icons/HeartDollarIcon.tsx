import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartDollarIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#heart-dollar-icon_svg__a)"
    >
      <path d="m13.001 19-1 1-7.5-7.428a5 5 0 1 1 7.5-6.566 5 5 0 0 1 8.785 4.444M21 15h-2.5a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 1 1 0 3H17M19 21v1m0-8v1" />
    </g>
    <defs>
      <clipPath id="heart-dollar-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeartDollarIcon;
