import * as React from "react";
import type { SVGProps } from "react";
const SvgLogicBufferIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#logic-buffer-icon_svg__a)"
    >
      <path d="M22 12h-5M2 9h5M2 15h5M7 5l10 7-10 7z" />
    </g>
    <defs>
      <clipPath id="logic-buffer-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLogicBufferIcon;
