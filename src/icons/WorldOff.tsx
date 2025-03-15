import * as React from "react";
import type { SVGProps } from "react";
const SvgWorldOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#world-off_svg__a)"
    >
      <path d="M5.657 5.614a9 9 0 0 0 12.717 12.74m1.672-2.323A9 9 0 0 0 7.98 3.947M3.602 9h5.4m4 0h7.4M3.602 15h11.4m4 0h1.4" />
      <path d="M11.5 3a17 17 0 0 0-1.494 3.022M9.16 9.167c-.68 4.027.1 8.244 2.34 11.833M12.5 3a17 17 0 0 1 2.549 8.005m-.207 3.818A17 17 0 0 1 12.5 21M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="world-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWorldOff;
