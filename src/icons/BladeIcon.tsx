import * as React from "react";
import type { SVGProps } from "react";
const SvgBladeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#blade-icon_svg__a)">
      <path
        fill="currentColor"
        d="M11.586 3a2 2 0 0 1 2.828 0l.586.585.586-.585a2 2 0 0 1 2.7-.117l.128.117L21 5.586a2 2 0 0 1 0 2.828L20.414 9l.586.586a2 2 0 0 1 0 2.828L12.414 21a2 2 0 0 1-2.828 0L9 20.414 8.414 21a2 2 0 0 1-2.828 0L3 18.414a2 2 0 0 1 0-2.828l.585-.587L3 14.414a2 2 0 0 1-.117-2.7l.117-.13zm3.027 4.21a1 1 0 0 0-1.32 1.497l.292.293-1.068 1.067a2.004 2.004 0 0 0-2.512 1.784L10 12l.005.15q.014.188.062.367L9 13.585l-.293-.292-.094-.083a1 1 0 0 0-1.32 1.497l.292.293-.292.293-.083.094a1 1 0 0 0 1.497 1.32L9 16.415l.293.292.094.083a1 1 0 0 0 1.32-1.497L10.415 15l1.069-1.067a2.002 2.002 0 0 0 2.449-2.45L15 10.415l.293.292.094.083a1 1 0 0 0 1.32-1.497L16.415 9l.292-.293.083-.094a1 1 0 0 0-1.497-1.32L15 7.585l-.293-.292z"
      />
    </g>
    <defs>
      <clipPath id="blade-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBladeIcon;
