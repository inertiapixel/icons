import * as React from "react";
import type { SVGProps } from "react";
const SvgSwordOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#sword-off_svg__a)"
    >
      <path d="M11.938 7.937 15 4h5v5l-3.928 3.055m-2.259 1.757L11 16l-4 4-3-3 4-4 2.19-2.815M6.5 11.5l6 6M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="sword-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSwordOff;
