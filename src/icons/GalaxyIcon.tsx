import * as React from "react";
import type { SVGProps } from "react";
const SvgGalaxyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#galaxy-icon_svg__a)"
    >
      <path d="M12 3q-2 1.5-2 4.5c0 3 2 4.5 2 4.5s2 1.5 2 4.5q0 3-2 4.5" />
      <path d="M19.795 16.5q-.3-2.482-2.897-3.982c-2.597-1.5-4.897-.518-4.897-.518s-2.299.982-4.897-.518Q4.506 9.982 4.207 7.5" />
      <path d="M19.795 7.502q-2.299-.982-4.897.518c-2.597 1.5-2.897 3.982-2.897 3.982s-.299 2.482-2.897 3.982q-2.598 1.5-4.897.518" />
    </g>
    <defs>
      <clipPath id="galaxy-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGalaxyIcon;
