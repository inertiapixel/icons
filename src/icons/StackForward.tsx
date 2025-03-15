import * as React from "react";
import type { SVGProps } from "react";
const SvgStackForward = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#stack-forward_svg__a)"
    >
      <path fill="currentColor" d="M12 5 4 9l8 4 8-4z" />
      <path d="m10 12-6 3 8 4 8-4-6-3" />
    </g>
    <defs>
      <clipPath id="stack-forward_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStackForward;
