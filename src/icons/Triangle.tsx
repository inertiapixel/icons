import * as React from "react";
import type { SVGProps } from "react";
const SvgTriangle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#triangle_svg__a)">
      <path
        fill="currentColor"
        d="M12 1.672A2.91 2.91 0 0 0 9.51 3.075l-8.11 13.537a2.914 2.914 0 0 0 2.484 4.385h16.225a2.914 2.914 0 0 0 2.503-4.371L14.495 3.08A2.92 2.92 0 0 0 12 1.672"
      />
    </g>
    <defs>
      <clipPath id="triangle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTriangle;
