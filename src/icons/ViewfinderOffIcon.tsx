import * as React from "react";
import type { SVGProps } from "react";
const SvgViewfinderOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#viewfinder-off-icon_svg__a)"
    >
      <path d="M5.65 5.624a9 9 0 1 0 12.71 12.745m1.683-2.328A9 9 0 0 0 7.95 3.96M12 3v4M12 21v-3M3 12h4M21 12h-3M12 12v.01M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="viewfinder-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgViewfinderOffIcon;
