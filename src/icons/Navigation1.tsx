import * as React from "react";
import type { SVGProps } from "react";
const SvgNavigation1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#navigation-1_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m12 18.5 7.265 2.463c.197.077.42.032.57-.116a.55.55 0 0 0 .134-.572L12 3 4.03 20.275c-.07.2-.017.424.135.572.15.148.374.193.57.116z"
      />
    </g>
    <defs>
      <clipPath id="navigation-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNavigation1;
