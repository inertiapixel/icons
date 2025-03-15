import * as React from "react";
import type { SVGProps } from "react";
const SvgBoldOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bold-off_svg__a)"
    >
      <path d="M9 5h4a3.5 3.5 0 0 1 2.222 6.204M12 12H7V7M17.107 17.112A3.5 3.5 0 0 1 14 19H7v-7M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="bold-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBoldOff;
