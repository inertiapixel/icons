import * as React from "react";
import type { SVGProps } from "react";
const SvgLasso = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#lasso_svg__a)"
    >
      <path d="M4.028 13.252C3.371 12.28 3 11.174 3 10c0-3.866 4.03-7 9-7s9 3.134 9 7-4.03 7-9 7c-1.913 0-3.686-.464-5.144-1.255" />
      <path d="M3 15a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M5 17c0 1.42.316 2.805 1 4" />
    </g>
    <defs>
      <clipPath id="lasso_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLasso;
