import * as React from "react";
import type { SVGProps } from "react";
const SvgApiOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#api-off_svg__a)"
    >
      <path d="M4 13h5M12 16v-4m0-4h3a2 2 0 0 1 2 2v1c0 .554-.225 1.055-.589 1.417M13 13h-1M20 8v8M9 16v-5.5a2.5 2.5 0 1 0-5 0V16M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="api-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgApiOff;
