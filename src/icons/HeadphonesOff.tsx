import * as React from "react";
import type { SVGProps } from "react";
const SvgHeadphonesOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#headphones-off_svg__a)"
    >
      <path d="m3 3 18 18M4 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM17 13h1a2 2 0 0 1 2 2v1m-.589 3.417c-.361.36-.86.583-1.411.583h-1a2 2 0 0 1-2-2v-3" />
      <path d="M4 14.999v-3c0-2.21.896-4.21 2.344-5.658m2.369-1.638A8 8 0 0 1 20 11.999v3" />
    </g>
    <defs>
      <clipPath id="headphones-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeadphonesOff;
