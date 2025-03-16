import * as React from "react";
import type { SVGProps } from "react";
const SvgPaletteIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#palette-icon_svg__a)"
    >
      <path d="M12 21a9 9 0 1 1 0-18c4.97 0 9 3.582 9 8 0 1.06-.474 2.078-1.318 2.828S17.693 15 16.5 15H14a2 2 0 0 0-1 3.75A1.3 1.3 0 0 1 12 21" />
      <path d="M7.5 10.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M11.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M15.5 10.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
    </g>
    <defs>
      <clipPath id="palette-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPaletteIcon;
