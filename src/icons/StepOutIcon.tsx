import * as React from "react";
import type { SVGProps } from "react";
const SvgStepOutIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#step-out-icon_svg__a)"
    >
      <path d="M12 3v12M16 7l-4-4M8 7l4-4M11 20a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
    </g>
    <defs>
      <clipPath id="step-out-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStepOutIcon;
