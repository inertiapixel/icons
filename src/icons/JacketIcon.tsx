import * as React from "react";
import type { SVGProps } from "react";
const SvgJacketIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#jacket-icon_svg__a)"
    >
      <path d="m16 3-4 5-4-5" />
      <path d="M12 19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8.172a2 2 0 0 1 .586-1.414l.828-.828A2 2 0 0 0 6 7.172V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2.172a2 2 0 0 0 .586 1.414l.828.828A2 2 0 0 1 20 10.828V19a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2" />
      <path d="M20 13h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3M4 17h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H4M12 19V8" />
    </g>
    <defs>
      <clipPath id="jacket-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgJacketIcon;
