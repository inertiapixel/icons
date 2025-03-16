import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeLinkIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#home-link-icon_svg__a)"
    >
      <path d="M20.085 11.085 12 3l-9 9h2v7a2 2 0 0 0 2 2h4.5" />
      <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 1.807 1.143M20 21a1 1 0 1 0 2 0 1 1 0 0 0-2 0M20 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0M15 19a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
      <path d="m21 16-5 3 5 2" />
    </g>
    <defs>
      <clipPath id="home-link-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHomeLinkIcon;
