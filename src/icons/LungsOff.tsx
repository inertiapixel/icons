import * as React from "react";
import type { SVGProps } from "react";
const SvgLungsOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#lungs-off_svg__a)"
    >
      <path d="M6.581 6.61c-1.206 1.057-2.07 2.625-2.933 5.448q-.63 2.055-.648 4.775c-.012 1.675 1.261 3.054 2.877 3.161l.203.007c1.611 0 2.918-1.335 2.918-2.98v-8.02M15 11V7.257C15 6.563 15.552 6 16.233 6c.204 0 .405.052.584.15l.13.083c1.46 1.059 2.432 2.647 3.405 5.824q.63 2.055.648 4.775v.187m-1.455 2.51c-.417.265-.9.43-1.419.464l-.202.007c-1.613 0-2.92-1.335-2.92-2.98V15M9 12a3 3 0 0 0 2.132-.89M12 4v4M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="lungs-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLungsOff;
