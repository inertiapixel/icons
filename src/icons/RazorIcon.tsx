import * as React from "react";
import type { SVGProps } from "react";
const SvgRazorIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#razor-icon_svg__a)"
    >
      <path d="M7 3h10v4H7zM12 7v4M12 11a2 2 0 0 1 2 2v6a2 2 0 0 1-4 0v-6a2 2 0 0 1 2-2" />
    </g>
    <defs>
      <clipPath id="razor-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRazorIcon;
