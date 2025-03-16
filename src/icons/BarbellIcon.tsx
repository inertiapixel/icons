import * as React from "react";
import type { SVGProps } from "react";
const SvgBarbellIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#barbell-icon_svg__a)">
      <path d="M4 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-3H2a1 1 0 0 1 0-2h1V8a1 1 0 0 1 1-1M20 7a1 1 0 0 1 1 1v3h1a1 1 0 0 1 0 2h-1v3a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1M16 5a2 2 0 0 1 2 2v10a2 2 0 0 1-4 0v-4h-4v4a2 2 0 0 1-4 0V7a2 2 0 1 1 4 0v4h4V7a2 2 0 0 1 2-2" />
    </g>
    <defs>
      <clipPath id="barbell-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBarbellIcon;
