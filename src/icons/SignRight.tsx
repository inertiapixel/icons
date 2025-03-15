import * as React from "react";
import type { SVGProps } from "react";
const SvgSignRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#sign-right_svg__a)">
      <path
        fill="currentColor"
        d="M10 2a1 1 0 0 1 .993.883L11 3v2h5a1 1 0 0 1 .694.28l.087.095 2 2.5a1 1 0 0 1 .072 1.147l-.072.103-2 2.5a1 1 0 0 1-.652.367L16 12h-5v8h1a1 1 0 0 1 .117 1.993L12 22H8a1 1 0 0 1-.117-1.993L8 20h1v-8H6a1 1 0 0 1-.993-.883L5 11V6a1 1 0 0 1 .883-.993L6 5h3V3a1 1 0 0 1 1-1"
      />
    </g>
    <defs>
      <clipPath id="sign-right_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSignRight;
