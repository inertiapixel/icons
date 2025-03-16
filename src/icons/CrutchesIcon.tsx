import * as React from "react";
import type { SVGProps } from "react";
const SvgCrutchesIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#crutches-icon_svg__a)"
    >
      <path d="M8 5a2 2 0 0 1 2-2h4a2 2 0 0 1 0 4h-4a2 2 0 0 1-2-2M11 21h2M12 21v-4.092a3 3 0 0 1 .504-1.664l.992-1.488A3 3 0 0 0 14 12.092V7M12 21v-4.092a3 3 0 0 0-.504-1.664l-.992-1.488A3 3 0 0 1 10 12.092V7M10 11h4" />
    </g>
    <defs>
      <clipPath id="crutches-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCrutchesIcon;
