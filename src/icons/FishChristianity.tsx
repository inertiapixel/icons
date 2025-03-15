import * as React from "react";
import type { SVGProps } from "react";
const SvgFishChristianity = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#fish-christianity_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 7S16.354 17 9.692 17c-3.226.025-6.194-1.905-7.692-5 1.498-3.095 4.466-5.025 7.692-5C16.354 7 22 17 22 17"
      />
    </g>
    <defs>
      <clipPath id="fish-christianity_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFishChristianity;
