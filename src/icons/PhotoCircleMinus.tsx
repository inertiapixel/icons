import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoCircleMinus = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#photo-circle-minus_svg__a)"
    >
      <path d="M15 8h.01M20.475 15.035A8.998 8.998 0 0 0 12 3a9 9 0 1 0 .525 17.985" />
      <path d="m4 15.002 4-4c.928-.893 2.072-.893 3 0l4 4" />
      <path d="m14 14.002 1-1c.928-.893 2.072-.893 3 0l2 2M16 19h6" />
    </g>
    <defs>
      <clipPath id="photo-circle-minus_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhotoCircleMinus;
