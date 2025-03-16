import * as React from "react";
import type { SVGProps } from "react";
const SvgFishIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#fish-icon_svg__a)"
    >
      <path d="M16.69 7.441a6.97 6.97 0 0 0-1.69 4.56 6.97 6.97 0 0 0 1.699 4.571" />
      <path d="M2 9.503c7.715 8.647 14.75 10.265 20 2.498-5.25-7.76-12.285-6.142-20 2.504M18 11v.01" />
      <path d="M11.5 10.5q-1 1.5 0 3" />
    </g>
    <defs>
      <clipPath id="fish-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFishIcon;
