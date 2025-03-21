import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareKeyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#square-key-icon_svg__a)"
    >
      <path d="M12 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="m12.5 11.5-4 4L10 17M12 15l-1.5-1.5" />
      <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </g>
    <defs>
      <clipPath id="square-key-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSquareKeyIcon;
