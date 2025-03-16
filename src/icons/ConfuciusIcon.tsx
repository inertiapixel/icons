import * as React from "react";
import type { SVGProps } from "react";
const SvgConfuciusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#confucius-icon_svg__a)"
    >
      <path d="m9 19 3 2V3M4 10l8-2M4 18l8-10M20 18l-8-8 8-4" />
    </g>
    <defs>
      <clipPath id="confucius-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgConfuciusIcon;
