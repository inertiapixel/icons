import * as React from "react";
import type { SVGProps } from "react";
const SvgLungs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#lungs_svg__a)">
      <path
        fill="currentColor"
        d="M11.998 3a1 1 0 0 1 1 1v5a2 2 0 0 0 1 1.732V7.257c0-1.242.995-2.257 2.233-2.257.372 0 .738.094 1.122.307l.18.117c1.695 1.23 2.76 3.035 3.773 6.34q.675 2.204.692 5.06c.016 2.195-1.657 4.024-3.843 4.168l-.237.008c-2.17 0-3.92-1.787-3.92-3.98v-4.146a4 4 0 0 1-1.893-1.112l-.107-.118-.107.118A4 4 0 0 1 10 12.874v4.146c0 2.193-1.75 3.98-3.92 3.98l-.268-.01c-2.155-.142-3.827-1.971-3.81-4.165q.017-2.858.691-5.06C3.703 8.458 4.768 6.653 6.514 5.39l.188-.117A2.2 2.2 0 0 1 7.766 5c1.237 0 2.232 1.015 2.232 2.257L10 10.732A2 2 0 0 0 11 9V4a1 1 0 0 1 1-1"
      />
    </g>
    <defs>
      <clipPath id="lungs_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLungs;
