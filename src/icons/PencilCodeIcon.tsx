import * as React from "react";
import type { SVGProps } from "react";
const SvgPencilCodeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#pencil-code-icon_svg__a)"
    >
      <path d="M4 20h4L18.5 9.5a2.828 2.828 0 0 0-4-4L4 16zM13.5 6.5l4 4M20 21l2-2-2-2M17 17l-2 2 2 2" />
    </g>
    <defs>
      <clipPath id="pencil-code-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPencilCodeIcon;
