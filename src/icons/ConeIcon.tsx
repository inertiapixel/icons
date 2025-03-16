import * as React from "react";
import type { SVGProps } from "react";
const SvgConeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#cone-icon_svg__a)">
      <path
        fill="currentColor"
        d="M12 1.001c.72 0 1.385.387 1.749 1.03l8.13 14.99a1 1 0 0 1 .121.477v.498c0 2.46-4.306 3.945-9.677 4.002L12 22c-5.52 0-10-1.495-10-4.003v-.5a1 1 0 0 1 .121-.477L10.26 2.015A2 2 0 0 1 12 1"
      />
    </g>
    <defs>
      <clipPath id="cone-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgConeIcon;
