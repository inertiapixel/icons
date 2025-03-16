import * as React from "react";
import type { SVGProps } from "react";
const SvgStackPushIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#stack-push-icon_svg__a)"
    >
      <path d="m6 10-2 1 8 4 8-4-2-1M4 15l8 4 8-4M12 4v7" />
      <path d="m15 8-3 3-3-3" />
    </g>
    <defs>
      <clipPath id="stack-push-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStackPushIcon;
