import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationHeart = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#location-heart_svg__a)"
    >
      <path d="M10.366 14.73 10 14l-7-3.5a.55.55 0 0 1 0-1L21 3l-3.024 8.373M18 22l3.35-3.284a2.14 2.14 0 0 0 .005-3.071 2.24 2.24 0 0 0-3.129-.006l-.224.22-.223-.22a2.24 2.24 0 0 0-3.128-.006 2.143 2.143 0 0 0-.006 3.07z" />
    </g>
    <defs>
      <clipPath id="location-heart_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLocationHeart;
