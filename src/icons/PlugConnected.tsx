import * as React from "react";
import type { SVGProps } from "react";
const SvgPlugConnected = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#plug-connected_svg__a)"
    >
      <path d="m6.998 12 5 5-1.5 1.5a3.537 3.537 0 1 1-5-5zM17 11.999l-5-5 1.5-1.5a3.536 3.536 0 1 1 5 5zM3 21l2.5-2.5M18.5 5.5 21 3M10 11l-2 2M13 14l-2 2" />
    </g>
    <defs>
      <clipPath id="plug-connected_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlugConnected;
