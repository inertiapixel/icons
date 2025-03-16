import * as React from "react";
import type { SVGProps } from "react";
const SvgDropCircleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#drop-circle-icon_svg__a)"
    >
      <path d="M10.069 15.34c1.114.88 2.74.88 3.855 0s1.398-2.388.67-3.575L12 8l-2.602 3.765c-.726 1.187-.443 2.694.672 3.575" />
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
    </g>
    <defs>
      <clipPath id="drop-circle-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDropCircleIcon;
