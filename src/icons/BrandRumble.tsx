import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandRumble = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-rumble_svg__a)"
    >
      <path d="M19.993 9.108c.383.4.687.863.893 1.368a4.2 4.2 0 0 1 .006 3.166 4.4 4.4 0 0 1-.887 1.372 20 20 0 0 1-2.208 2 20.6 20.6 0 0 1-2.495 1.67 21.3 21.3 0 0 1-5.622 2.201 4.2 4.2 0 0 1-3.002-.404 4 4 0 0 1-1.163-.967 3.8 3.8 0 0 1-.695-1.312C3.621 14.3 3.798 9.89 4.954 5.972c.609-2.057 2.643-3.349 4.737-2.874 3.88.88 7.52 3.147 10.302 6.01" />
      <path d="M14.043 13.034c.67-.506.67-1.49 0-2.01a15 15 0 0 0-1.498-1.045 16 16 0 0 0-1.62-.865c-.77-.35-1.63.14-1.753.973a15.4 15.4 0 0 0-.1 3.787 1.232 1.232 0 0 0 1.715 1.026q.874-.359 1.694-.827.815-.466 1.562-1.034z" />
    </g>
    <defs>
      <clipPath id="brand-rumble_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandRumble;
