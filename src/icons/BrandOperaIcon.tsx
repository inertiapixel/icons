import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandOperaIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-opera-icon_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
      <path d="M9 12c0 1.326.316 2.598.879 3.536C10.44 16.473 11.204 17 12 17s1.559-.527 2.121-1.464c.563-.938.879-2.21.879-3.536s-.316-2.598-.879-3.536C13.56 7.527 12.796 7 12 7s-1.559.527-2.121 1.464C9.316 9.402 9 10.674 9 12" />
    </g>
    <defs>
      <clipPath id="brand-opera-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandOperaIcon;
