import * as React from "react";
import type { SVGProps } from "react";
const SvgFlameOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#flame-off-icon_svg__a)"
    >
      <path d="M8.973 8.974C8.638 9.352 8.303 9.69 8 10c-1.226 1.26-2 3.24-2 5a6 6 0 0 0 11.472 2.466m.383-3.597C17.535 12.46 16.733 10.824 16 10q-.42.706-.79 1.202m-2.358-2.35C12.784 6.695 11.67 4.668 11 4c0 .968-.18 1.801-.465 2.527M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="flame-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFlameOffIcon;
