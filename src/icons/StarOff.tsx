import * as React from "react";
import type { SVGProps } from "react";
const SvgStarOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#star-off_svg__a)"
    >
      <path d="m3 3 18 18M10.013 6.018l1.98-4.014 3.087 6.253 6.9 1-4.421 4.304m.012 4.01.588 3.426L12 17.752l-6.172 3.245 1.179-6.873-5-4.867 6.327-.917" />
    </g>
    <defs>
      <clipPath id="star-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStarOff;
