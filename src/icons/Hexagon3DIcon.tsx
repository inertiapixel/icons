import * as React from "react";
import type { SVGProps } from "react";
const SvgHexagon3DIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#hexagon-3d-icon_svg__a)"
    >
      <path d="M19.001 6.844a2.01 2.01 0 0 1 1 1.752v6.555c0 .728-.394 1.4-1.03 1.753l-6 3.844a2 2 0 0 1-1.942 0l-6-3.844A2 2 0 0 1 4 15.152V8.596c0-.729.394-1.4 1.029-1.753l6-3.583a2.05 2.05 0 0 1 2 0l6 3.584h-.03zM12 16.5V21M4.5 7.5 8 10M16 10l4-2.5" />
      <path d="M12 7.5V12l-4 2M12 12l4 2" />
      <path d="m12 16.5 4-2.5v-4l-4-2.5L8 10v4z" />
    </g>
    <defs>
      <clipPath id="hexagon-3d-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHexagon3DIcon;
