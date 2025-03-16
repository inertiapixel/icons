import * as React from "react";
import type { SVGProps } from "react";
const SvgVideoOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#video-off-icon_svg__a)"
    >
      <path d="m3 3 18 18M15 10.999v-1l4.553-2.276A1 1 0 0 1 21 8.617v6.764a1 1 0 0 1-.675.946" />
      <path d="M10 6h3a2 2 0 0 1 2 2v3m0 4v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1" />
    </g>
    <defs>
      <clipPath id="video-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVideoOffIcon;
