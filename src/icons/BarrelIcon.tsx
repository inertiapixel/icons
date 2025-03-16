import * as React from "react";
import type { SVGProps } from "react";
const SvgBarrelIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#barrel-icon_svg__a)"
    >
      <path d="M7.278 4h9.444a2 2 0 0 1 1.841 1.22Q20 8.61 20 12t-1.437 6.78A2 2 0 0 1 16.722 20H7.278a2 2 0 0 1-1.841-1.22Q4 15.39 4 12t1.437-6.78A2 2 0 0 1 7.278 4" />
      <path d="M14 4q1 4 1 8t-1 8M10 4q-1 4-1 8t1 8M4.5 16h15M19.5 8h-15" />
    </g>
    <defs>
      <clipPath id="barrel-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBarrelIcon;
