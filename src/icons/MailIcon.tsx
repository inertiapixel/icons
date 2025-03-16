import * as React from "react";
import type { SVGProps } from "react";
const SvgMailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#mail-icon_svg__a)">
      <path d="M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297.116.066a1 1 0 0 0 .878 0l.116-.066z" />
      <path d="M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37A3 3 0 0 1 4.8 4.007L5 4z" />
    </g>
    <defs>
      <clipPath id="mail-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMailIcon;
