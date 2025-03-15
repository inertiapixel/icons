import * as React from "react";
import type { SVGProps } from "react";
const SvgTemperaturePlus = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#temperature-plus_svg__a)"
    >
      <path d="M8 13.5a4 4 0 1 0 4 0V5a2 2 0 1 0-4 0zM8 9h4M16 9h6M19 6v6" />
    </g>
    <defs>
      <clipPath id="temperature-plus_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTemperaturePlus;
