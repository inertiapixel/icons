import * as React from "react";
import type { SVGProps } from "react";
const SvgPassword = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#password_svg__a)"
    >
      <path d="M12 10v4M10 13l4-2M10 11l4 2M5 10v4M3 13l4-2M3 11l4 2M19 10v4M17 13l4-2M17 11l4 2" />
    </g>
    <defs>
      <clipPath id="password_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPassword;
