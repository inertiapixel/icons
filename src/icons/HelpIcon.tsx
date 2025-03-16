import * as React from "react";
import type { SVGProps } from "react";
const SvgHelpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#help-icon_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12M12 17v.01" />
      <path d="M12 13.501a1.5 1.5 0 0 1 1-1.5 2.6 2.6 0 1 0-3-4" />
    </g>
    <defs>
      <clipPath id="help-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHelpIcon;
