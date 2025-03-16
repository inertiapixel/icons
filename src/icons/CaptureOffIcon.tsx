import * as React from "react";
import type { SVGProps } from "react";
const SvgCaptureOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#capture-off-icon_svg__a)"
    >
      <path d="M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2c.554 0 1.055-.226 1.417-.59M9.868 9.886a3 3 0 0 0 4.255 4.23m.58-3.416a3 3 0 0 0-1.4-1.403M4 7.999v-2c0-.548.22-1.044.577-1.405M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="capture-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCaptureOffIcon;
