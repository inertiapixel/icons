import * as React from "react";
import type { SVGProps } from "react";
const SvgKayakIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#kayak-icon_svg__a)"
    >
      <path d="M6.414 6.414a2 2 0 0 0 0-2.828L5 2.172 2.172 5l1.414 1.414a2 2 0 0 0 2.828 0M17.586 17.586a2 2 0 0 0 0 2.828L19 21.828 21.828 19l-1.414-1.414a2 2 0 0 0-2.828 0M6.5 6.5l11 11M22 2.5C12.017 5.101 4.373 10.452 2 22c9.983-2.601 17.627-7.952 20-19.5M6.5 12.5l5 5M12.5 6.5l5 5" />
    </g>
    <defs>
      <clipPath id="kayak-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgKayakIcon;
