import * as React from "react";
import type { SVGProps } from "react";
const SvgSchemaOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#schema-off_svg__a)"
    >
      <path d="M6 2h4v4M6 6H5V5M15 11v-1h5v4h-2M5 18h5v4H5zM5 10h5v4H5zM10 12h2M7.5 7.5V10M7.5 14v4M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="schema-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSchemaOff;
