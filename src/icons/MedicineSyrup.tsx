import * as React from "react";
import type { SVGProps } from "react";
const SvgMedicineSyrup = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#medicine-syrup_svg__a)"
    >
      <path d="M8 21h8a1 1 0 0 0 1-1V10a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v10a1 1 0 0 0 1 1M10 14h4M12 12v4M10 7V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3" />
    </g>
    <defs>
      <clipPath id="medicine-syrup_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMedicineSyrup;
