import * as React from "react";
import type { SVGProps } from "react";
const SvgFreezeRowColumn = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#freeze-row-column_svg__a)"
    >
      <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM15 3 3 15M9.5 3l-6 6M20 3.5 14.5 9M9 15l-5 5" />
      <path d="M21 9H9v12" />
    </g>
    <defs>
      <clipPath id="freeze-row-column_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFreezeRowColumn;
