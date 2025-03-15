import * as React from "react";
import type { SVGProps } from "react";
const SvgFold = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#fold_svg__a)"
    >
      <path d="M12 3v6m0 0 3-3m-3 3L9 6M12 21v-6m0 0 3 3m-3-3-3 3M4 12h1M9 12h1M14 12h1M19 12h1" />
    </g>
    <defs>
      <clipPath id="fold_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFold;
