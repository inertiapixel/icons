import * as React from "react";
import type { SVGProps } from "react";
const SvgHeart1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#heart-1-icon_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.501 12.572 12.001 20l-7.5-7.428a5 5 0 1 1 7.5-6.566 5 5 0 1 1 7.5 6.572"
      />
    </g>
    <defs>
      <clipPath id="heart-1-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeart1Icon;
