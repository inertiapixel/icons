import * as React from "react";
import type { SVGProps } from "react";
const SvgEggOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#egg-off-icon_svg__a)"
    >
      <path d="M17.927 17.935C16.716 19.793 14.576 20.888 12 21c-4.2 0-7-2.763-7-6.917 0-2.568.753-5.14 1.91-7.158M8.64 4.628C9.676 3.608 10.838 2.998 12 3c3.5.007 7 5.545 7 11.083q0 .447-.045.868M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="egg-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEggOffIcon;
