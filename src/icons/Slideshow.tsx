import * as React from "react";
import type { SVGProps } from "react";
const SvgSlideshow = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#slideshow_svg__a)"
    >
      <path d="M15 6h.01M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z" />
      <path d="m3 13.002 4-4c.456-.439.973-.67 1.5-.67s1.044.231 1.5.67l4 4" />
      <path d="m13 12.002 2-2c.456-.439.973-.67 1.5-.67s1.044.231 1.5.67l3 3M8 21h.01M12 21h.01M16 21h.01" />
    </g>
    <defs>
      <clipPath id="slideshow_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSlideshow;
