import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoCircle = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#photo-circle_svg__a)"
    >
      <path d="M15 8h.01M4 15.002l4-4c.928-.893 2.072-.893 3 0l5 5M14 14.002l1-1c.928-.893 2.072-.893 3 0l2 2" />
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
    </g>
    <defs>
      <clipPath id="photo-circle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhotoCircle;
