import * as React from "react";
import type { SVGProps } from "react";
const SvgRollerSkating = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#roller-skating_svg__a)"
    >
      <path d="M5.907 5h3.418a1 1 0 0 1 .928.629l1.143 2.856a3 3 0 0 0 2.207 1.83l4.717.926a2.084 2.084 0 0 1 1.682 2.045V14a1 1 0 0 1-1 1H5.107a1 1 0 0 1-1-1.1l.8-8a1 1 0 0 1 1-.9" />
      <path d="M6 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M14 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    </g>
    <defs>
      <clipPath id="roller-skating_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRollerSkating;
