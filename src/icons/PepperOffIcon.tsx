import * as React from "react";
import type { SVGProps } from "react";
const SvgPepperOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#pepper-off-icon_svg__a)"
    >
      <path d="M12.59 12.592c-.77 1.418-2.535 2.41-4.59 2.41-2.761 0-5-1.79-5-4a8 8 0 0 0 13.643 5.67m1.64-2.357A8 8 0 0 0 19 11.002a3 3 0 0 0-5.545-1.59" />
      <path d="M16 8c0-2 2-4 4-4M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="pepper-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPepperOffIcon;
