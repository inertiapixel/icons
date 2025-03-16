import * as React from "react";
import type { SVGProps } from "react";
const SvgHierarchyOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#hierarchy-off-icon_svg__a)"
    >
      <path d="M10 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M3 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M17.586 17.586a2 2 0 0 0 2.813 2.843" />
      <path d="M6.5 17.5 12 13l5.5 4.5M12 7v1m0 4v1M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="hierarchy-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHierarchyOffIcon;
