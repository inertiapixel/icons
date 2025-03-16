import * as React from "react";
import type { SVGProps } from "react";
const SvgMailAiIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mail-ai-icon_svg__a)"
    >
      <path d="M10 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4M3 7l8 5.345M15 11l6-4" />
      <path d="M14 21v-4a2 2 0 0 1 4 0v4M14 19h4M21 15v6" />
    </g>
    <defs>
      <clipPath id="mail-ai-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMailAiIcon;
