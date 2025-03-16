import * as React from "react";
import type { SVGProps } from "react";
const SvgHelpSmallIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#help-small-icon_svg__a)"
    >
      <path d="M12 16v.01M12 13a2 2 0 0 0 .914-3.782A1.98 1.98 0 0 0 10.5 9.7" />
    </g>
    <defs>
      <clipPath id="help-small-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHelpSmallIcon;
