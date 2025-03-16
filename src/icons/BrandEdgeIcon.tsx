import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandEdgeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-edge-icon_svg__a)"
    >
      <path d="M20.978 11.371a9 9 0 1 0-1.593 5.773" />
      <path d="M20.979 11.371c.21 2.993-5.034 2.413-6.913 1.486 1.392-1.6.402-4.038-2.274-3.85-1.745.121-2.927 1.156-2.784 3.201.28 3.99 4.444 6.205 10.36 4.79" />
      <path d="M3.022 12.63C2.74 8.585 11.74 5.4 14.27 9.94M12.63 20.979c-2.994.21-5.163-4.725-3.568-9.748" />
    </g>
    <defs>
      <clipPath id="brand-edge-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandEdgeIcon;
