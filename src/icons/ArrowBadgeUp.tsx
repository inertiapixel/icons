import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBadgeUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#arrow-badge-up_svg__a)">
      <path
        fill="currentColor"
        d="m11.375 6.22-5 4A1 1 0 0 0 6 11v6l.006.111a1 1 0 0 0 1.619.67L12 14.278l4.375 3.5A1 1 0 0 0 18 17v-6a1 1 0 0 0-.375-.78l-5-4a1 1 0 0 0-1.25 0"
      />
    </g>
    <defs>
      <clipPath id="arrow-badge-up_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowBadgeUp;
