import * as React from "react";
import type { SVGProps } from "react";
const SvgBoxOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#box-off_svg__a)"
    >
      <path d="M17.765 17.757 12 21l-8-4.5v-9l2.236-1.258m2.57-1.445L12 3l8 4.5V16M14.563 10.559 20 7.5M12 12v9M12 12 4 7.5M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="box-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBoxOff;
