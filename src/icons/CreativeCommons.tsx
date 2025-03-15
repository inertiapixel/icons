import * as React from "react";
import type { SVGProps } from "react";
const SvgCreativeCommons = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#creative-commons_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
      <path d="M10.5 10.5a2.187 2.187 0 0 0-2.914.116 1.927 1.927 0 0 0 0 2.768 2.19 2.19 0 0 0 2.914.116M16.5 10.5a2.187 2.187 0 0 0-2.914.116 1.927 1.927 0 0 0 0 2.768 2.19 2.19 0 0 0 2.914.116" />
    </g>
    <defs>
      <clipPath id="creative-commons_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCreativeCommons;
