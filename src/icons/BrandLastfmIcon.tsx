import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandLastfmIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#brand-lastfm-icon_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 8c-.83-1-1.387-1-2-1-.611 0-2 .271-2 2s1.385 2.233 3 3c1.617.767 2.126 1.812 2 3-.124 1.188-1 2-3 2s-3-1-3.5-2-1.584-4.78-2.496-6a5 5 0 1 0-1 7"
      />
    </g>
    <defs>
      <clipPath id="brand-lastfm-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandLastfmIcon;
