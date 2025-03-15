import * as React from "react";
import type { SVGProps } from "react";
const SvgAlertTriangleOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#alert-triangle-off_svg__a)"
    >
      <path d="M21.998 17.996a1.9 1.9 0 0 0-.256-.872L13.637 3.59a1.913 1.913 0 0 0-3.273 0l-1.04 1.736M7.83 7.82l-5.573 9.304a1.914 1.914 0 0 0 1.636 2.871H20M12 16h.01M3 3l18 18M12 7v1" />
    </g>
    <defs>
      <clipPath id="alert-triangle-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAlertTriangleOff;
