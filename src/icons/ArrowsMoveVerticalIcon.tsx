import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsMoveVerticalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrows-move-vertical-icon_svg__a)"
    >
      <path d="m9 18 3 3 3-3M12 15v6M15 6l-3-3-3 3M12 3v6" />
    </g>
    <defs>
      <clipPath id="arrows-move-vertical-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowsMoveVerticalIcon;
