import * as React from "react";
import type { SVGProps } from "react";
const SvgDropletX = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#droplet-x_svg__a)"
    >
      <path d="M18.953 13.469a6.6 6.6 0 0 0-.889-2.59l-4.89-7.26c-.42-.625-1.287-.803-1.936-.397a1.4 1.4 0 0 0-.41.397l-4.893 7.26c-1.695 2.838-1.035 6.44 1.567 8.546a7.18 7.18 0 0 0 5.633 1.49M22 22l-5-5M17 22l5-5" />
    </g>
    <defs>
      <clipPath id="droplet-x_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDropletX;
