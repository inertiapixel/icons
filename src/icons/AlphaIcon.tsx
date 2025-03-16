import * as React from "react";
import type { SVGProps } from "react";
const SvgAlphaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#alpha-icon_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.098 6q-1.65 4.37-2.4 6m0 0c-1.879 4.088-3.713 6-6 6-2.4 0-4.8-2.4-4.8-6s2.4-6 4.8-6c2.267 0 4.135 1.986 6 6m0 0q.768 1.653 2.4 6"
      />
    </g>
    <defs>
      <clipPath id="alpha-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAlphaIcon;
