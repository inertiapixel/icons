import * as React from "react";
import type { SVGProps } from "react";
const SvgTemperatureSunIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#temperature-sun-icon_svg__a)"
    >
      <path d="M4 13.5a4 4 0 1 0 4 0V5a2 2 0 1 0-4 0zM4 9h4M13 16a4 4 0 1 0 0-8 4 4 0 0 0-1 .124M13 3v1M21 12h1M13 20v1M19.4 5.602l-.7.7M18.7 17.7l.7.7" />
    </g>
    <defs>
      <clipPath id="temperature-sun-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTemperatureSunIcon;
