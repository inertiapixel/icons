import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleXIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#circle-x-icon_svg__a)">
      <path
        fill="currentColor"
        d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34m-6.489 5.8a1 1 0 0 0-1.218 1.567L10.585 12l-1.292 1.293-.083.094a1 1 0 0 0 1.497 1.32L12 13.415l1.293 1.292.094.083a1 1 0 0 0 1.32-1.497L13.415 12l1.292-1.293.083-.094a1 1 0 0 0-1.497-1.32L12 10.585l-1.293-1.292-.094-.083z"
      />
    </g>
    <defs>
      <clipPath id="circle-x-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCircleXIcon;
