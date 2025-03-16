import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#home-up-icon_svg__a)"
    >
      <path d="M9 21v-6a2 2 0 0 1 2-2h2c.641 0 1.212.302 1.578.771" />
      <path d="M20.136 11.136 12 3l-9 9h2v7a2 2 0 0 0 2 2h6.344M19 22v-6M22 19l-3-3-3 3" />
    </g>
    <defs>
      <clipPath id="home-up-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHomeUpIcon;
