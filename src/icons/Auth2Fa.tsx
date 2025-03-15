import * as React from "react";
import type { SVGProps } from "react";
const SvgAuth2Fa = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#auth-2fa_svg__a)"
    >
      <path d="M7 16.002H3l3.47-4.66A2 2 0 1 0 3 9.802M10 16V8h4M10 12h3M17 16v-6a2 2 0 1 1 4 0v6M17 13h4" />
    </g>
    <defs>
      <clipPath id="auth-2fa_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAuth2Fa;
