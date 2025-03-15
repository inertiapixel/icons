import * as React from "react";
import type { SVGProps } from "react";
const SvgTable = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#table_svg__a)">
      <path d="M4 11h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a3 3 0 0 1-2.995-2.824L3 18v-6a1 1 0 0 1 1-1M21 12v6a3 3 0 0 1-2.824 2.995L18 21h-6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1M18 3a3 3 0 0 1 2.995 2.824L21 6v2a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM9 4v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a3 3 0 0 1 2.824-2.995L6 3h2a1 1 0 0 1 1 1" />
    </g>
    <defs>
      <clipPath id="table_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTable;
