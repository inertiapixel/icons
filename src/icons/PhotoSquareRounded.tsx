import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoSquareRounded = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#photo-square-rounded_svg__a)"
    >
      <path d="M15 8h.01M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" />
      <path d="m3.5 15.502 4.5-4.5c.928-.893 2.072-.893 3 0l5 5M14 14.002l1-1c.928-.893 2.072-.893 3 0l2.5 2.5" />
    </g>
    <defs>
      <clipPath id="photo-square-rounded_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhotoSquareRounded;
