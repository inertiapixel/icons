import * as React from "react";
import type { SVGProps } from "react";
const SvgShareOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#share-off-icon_svg__a)"
    >
      <path d="M3 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0M15 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0M15.862 15.897a3 3 0 0 0 4.265 4.22m.578-3.417a3 3 0 0 0-1.507-1.45M8.7 10.7l1.335-.687M12.66 8.66 15.3 7.3M8.7 13.3l6.6 3.4M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="share-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShareOffIcon;
