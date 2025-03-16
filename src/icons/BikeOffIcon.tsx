import * as React from "react";
import type { SVGProps } from "react";
const SvgBikeOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bike-off-icon_svg__a)"
    >
      <path d="M2 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0M16.438 16.44a3 3 0 0 0 4.123 4.123M22.001 18a3 3 0 0 0-3-3M12 19v-4l-3-3 1.665-1.332m2.215-1.772L14 8l2 3h3M16 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="bike-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBikeOffIcon;
