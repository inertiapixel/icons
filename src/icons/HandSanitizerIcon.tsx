import * as React from "react";
import type { SVGProps } from "react";
const SvgHandSanitizerIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#hand-sanitizer-icon_svg__a)"
    >
      <path d="M7 21h10V11a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3zM15 3H9a2 2 0 0 0-2 2M12 3v5M12 11v4M10 13h4" />
    </g>
    <defs>
      <clipPath id="hand-sanitizer-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHandSanitizerIcon;
