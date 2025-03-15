import * as React from "react";
import type { SVGProps } from "react";
const SvgHierarchy2 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#hierarchy-2_svg__a)"
    >
      <path d="M10 3h4v4h-4zM3 17h4v4H3zM17 17h4v4h-4zM7 17l5-4 5 4M12 7v6" />
    </g>
    <defs>
      <clipPath id="hierarchy-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHierarchy2;
