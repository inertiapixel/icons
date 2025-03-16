import * as React from "react";
import type { SVGProps } from "react";
const SvgTemperatureSnowIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#temperature-snow-icon_svg__a)"
    >
      <path d="M4 13.5a4 4 0 1 0 4 0V5a2 2 0 1 0-4 0zM4 9h4M14.75 4l1 2H18" />
      <path d="m17 4-3 5 2 3M20.25 10 19 12l1.25 2" />
      <path d="M22 12h-6l-2 3M18 18h-2.25l-1 2" />
      <path d="m17 20-3-5h-1M12 9l2.088.008" />
    </g>
    <defs>
      <clipPath id="temperature-snow-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTemperatureSnowIcon;
