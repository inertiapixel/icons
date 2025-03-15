import * as React from "react";
import type { SVGProps } from "react";
const SvgApi = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#api_svg__a)"
    >
      <path d="M4 13h5M12 16V8h3a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-3M20 8v8M9 16v-5.5a2.5 2.5 0 1 0-5 0V16" />
    </g>
    <defs>
      <clipPath id="api_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgApi;
