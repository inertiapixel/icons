import * as React from "react";
import type { SVGProps } from "react";
const SvgMacroOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#macro-off-icon_svg__a)"
    >
      <path d="M6 15a6 6 0 0 0 11.47 2.467" />
      <path d="M15.53 15.531a6 6 0 0 0-3.53 5.47" />
      <path d="M12 21a6 6 0 0 0-6-6M12 21V11M10.866 10.87a5.01 5.01 0 0 1-3.734-3.723M7 3l3 2 2-2 2 2 3-2v3a5 5 0 0 1-2.604 4.389M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="macro-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMacroOffIcon;
