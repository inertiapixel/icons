import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#heart-up-icon_svg__a)"
    >
      <path d="m12.001 20-7.5-7.428a5 5 0 1 1 7.5-6.566 4.999 4.999 0 0 1 8.792 4.391 5 5 0 0 1-.899 1.748M19 22v-6M22 19l-3-3-3 3" />
    </g>
    <defs>
      <clipPath id="heart-up-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeartUpIcon;
