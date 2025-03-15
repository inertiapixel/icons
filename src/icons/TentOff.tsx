import * as React from "react";
import type { SVGProps } from "react";
const SvgTentOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#tent-off_svg__a)"
    >
      <path d="m11 14 4 6h5m-2.863-6.868L12 4l-1.44 2.559M9.12 9.122 3 20h6l4-6M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="tent-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTentOff;
