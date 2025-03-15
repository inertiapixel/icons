import * as React from "react";
import type { SVGProps } from "react";
const SvgLemon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#lemon_svg__a)"
    >
      <path d="M17.538 3.395c3.904 3.906 3.904 10.237 0 14.143-3.906 3.904-10.237 3.904-14.143 0z" />
      <path d="M5.867 15.06a6.5 6.5 0 1 0 9.193-9.193M10.465 10.465l4.597 4.597M10.465 10.465v6.364M10.465 10.465h6.364" />
    </g>
    <defs>
      <clipPath id="lemon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLemon;
