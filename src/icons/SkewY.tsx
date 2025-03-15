import * as React from "react";
import type { SVGProps } from "react";
const SvgSkewY = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#skew-y_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.325 19h15.348a1 1 0 0 0 .962-1.275l-3.43-12a1 1 0 0 0-.96-.725H7.753a1 1 0 0 0-.961.725l-3.43 12A1 1 0 0 0 4.326 19"
      />
    </g>
    <defs>
      <clipPath id="skew-y_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSkewY;
