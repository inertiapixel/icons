import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleKeyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#circle-key-icon_svg__a)">
      <path
        fill="currentColor"
        d="M12 2c5.523 0 10 4.477 10 10A10 10 0 1 1 12 2m2 5a3 3 0 0 0-2.98 2.65l-.015.174L11 10l.005.176q.03.48.197.908l.09.209-3.5 3.5-.082.094a1 1 0 0 0 0 1.226l.083.094 1.5 1.5.094.083a1 1 0 0 0 1.226 0l.094-.083.083-.094a1 1 0 0 0 0-1.226l-.083-.094-.792-.793.585-.585.793.792.094.083a1 1 0 0 0 1.403-1.403l-.083-.094-.792-.793.792-.792A3 3 0 1 0 14 7m0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
      />
    </g>
    <defs>
      <clipPath id="circle-key-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCircleKeyIcon;
