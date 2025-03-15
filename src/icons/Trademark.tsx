import * as React from "react";
import type { SVGProps } from "react";
const SvgTrademark = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#trademark_svg__a)"
    >
      <path d="M4.5 9h5M7 9v6M13 15V9l3 4 3-4v6" />
    </g>
    <defs>
      <clipPath id="trademark_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTrademark;
