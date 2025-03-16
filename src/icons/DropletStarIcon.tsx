import * as React from "react";
import type { SVGProps } from "react";
const SvgDropletStarIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#droplet-star-icon_svg__a)"
    >
      <path d="m17.496 10.036-4.32-6.417c-.422-.625-1.289-.803-1.938-.397a1.4 1.4 0 0 0-.41.397l-4.893 7.26c-1.695 2.838-1.035 6.44 1.567 8.546a7.1 7.1 0 0 0 3.547 1.517M17.798 20.818l-2.172 1.137a.392.392 0 0 1-.568-.41l.415-2.41-1.757-1.708a.39.39 0 0 1 .217-.665l2.428-.352 1.086-2.193a.391.391 0 0 1 .702 0l1.086 2.193 2.428.352a.389.389 0 0 1 .217.665l-1.757 1.707.414 2.41a.39.39 0 0 1-.567.412z" />
    </g>
    <defs>
      <clipPath id="droplet-star-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDropletStarIcon;
