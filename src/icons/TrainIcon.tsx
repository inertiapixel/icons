import * as React from "react";
import type { SVGProps } from "react";
const SvgTrainIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#train-icon_svg__a)"
    >
      <path d="M21 13c0-3.87-3.37-7-10-7H3M3 15h16a2 2 0 0 0 2-2" />
      <path d="M3 6v5h17.5M3 10v4M8 11V6M13 11V6.5M3 19h18" />
    </g>
    <defs>
      <clipPath id="train-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTrainIcon;
