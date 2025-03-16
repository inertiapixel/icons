import * as React from "react";
import type { SVGProps } from "react";
const SvgAssemblyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#assembly-icon_svg__a)">
      <path
        fill="currentColor"
        d="m13.666 1.43 6.75 3.98q.1.06.18.134l.009.008.106.075a3.22 3.22 0 0 1 1.284 2.39L22 8.22v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032L3.678 18.33A3.23 3.23 0 0 1 2 15.504V8.219A3.21 3.21 0 0 1 3.65 5.41l6.775-3.995a3.34 3.34 0 0 1 3.24.015m-.64 5.343a2.03 2.03 0 0 0-2-.014L8.002 8.564A1.99 1.99 0 0 0 7 10.3v3.278a2 2 0 0 0 1.03 1.75l2.946 1.89c.657.367 1.39.367 1.994.033l3.054-1.955c.582-.322.976-.992.976-1.72V10.3l-.005-.164a2 2 0 0 0-.725-1.391l-.092-.07-.056-.047a1 1 0 0 0-.096-.064z"
      />
    </g>
    <defs>
      <clipPath id="assembly-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAssemblyIcon;
