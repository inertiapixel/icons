import * as React from "react";
import type { SVGProps } from "react";
const SvgUserSquareRounded = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#user-square-rounded_svg__a)"
    >
      <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
      <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" />
      <path d="M6 20.05V20a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v.05" />
    </g>
    <defs>
      <clipPath id="user-square-rounded_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUserSquareRounded;
