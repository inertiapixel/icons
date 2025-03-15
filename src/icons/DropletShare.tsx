import * as React from "react";
import type { SVGProps } from "react";
const SvgDropletShare = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#droplet-share_svg__a)"
    >
      <path d="M18.884 13.027a6.6 6.6 0 0 0-.82-2.148l-4.89-7.26c-.42-.625-1.287-.803-1.936-.397a1.4 1.4 0 0 0-.41.397l-4.893 7.26c-1.695 2.838-1.035 6.44 1.567 8.546A7.12 7.12 0 0 0 12 21.005M16 22l5-5M21 21.5V17h-4.5" />
    </g>
    <defs>
      <clipPath id="droplet-share_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDropletShare;
