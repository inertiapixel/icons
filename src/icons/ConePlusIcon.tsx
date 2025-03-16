import * as React from "react";
import type { SVGProps } from "react";
const SvgConePlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cone-plus-icon_svg__a)"
    >
      <path d="m18.03 12.022-5.16-9.515a1 1 0 0 0-1.74 0L3 17.497v.5C3 19.657 7.03 21 12 21q.255 0 .508-.005M16 19h6M19 16v6" />
    </g>
    <defs>
      <clipPath id="cone-plus-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgConePlusIcon;
