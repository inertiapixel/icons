import * as React from "react";
import type { SVGProps } from "react";
const SvgBatIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bat-icon_svg__a)"
    >
      <path d="M17 16c.74-2.286 2.778-3.762 5-3-.173-2.595.13-5.314-2-7.5-1.708 2.648-3.358 2.557-5 2.5V4l-3 2-3-2v4c-1.642.057-3.292.148-5-2.5-2.13 2.186-1.827 4.905-2 7.5 2.222-.762 4.26.714 5 3 2.593 0 3.889.952 5 4 1.111-3.048 2.407-4 5-4" />
      <path d="M9 8a3 3 0 1 0 6 0" />
    </g>
    <defs>
      <clipPath id="bat-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBatIcon;
