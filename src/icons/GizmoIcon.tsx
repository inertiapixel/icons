import * as React from "react";
import type { SVGProps } from "react";
const SvgGizmoIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#gizmo-icon_svg__a)"
    >
      <path d="m20 19-8-5.5L4 19M12 4v9.5M11 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
      <path d="M3 19a1 1 0 1 0 2 0 1 1 0 0 0-2 0M19 19a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
    </g>
    <defs>
      <clipPath id="gizmo-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGizmoIcon;
