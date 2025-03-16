import * as React from "react";
import type { SVGProps } from "react";
const SvgHemispherePlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#hemisphere-plus-icon_svg__a)"
    >
      <path d="M3 9c0 .394.233.784.685 1.148s1.115.695 1.951.973c.836.279 1.828.5 2.92.65A25 25 0 0 0 12 12c1.182 0 2.352-.078 3.444-.228s2.084-.372 2.92-.65c.836-.28 1.499-.61 1.95-.974C20.768 9.784 21 9.394 21 9s-.233-.784-.685-1.148-1.115-.695-1.951-.973c-.836-.279-1.828-.5-2.92-.65A25 25 0 0 0 12 6c-1.182 0-2.352.078-3.444.228s-2.084.372-2.92.65c-.836.28-1.499.61-1.95.974C3.232 8.216 3 8.606 3 9" />
      <path d="M3 9a9 9 0 0 0 9 9m8.396-5.752c.4-1.036.605-2.137.604-3.248M16 19h6M19 16v6" />
    </g>
    <defs>
      <clipPath id="hemisphere-plus-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHemispherePlusIcon;
