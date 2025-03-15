import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandDjango = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-django_svg__a)"
    >
      <path d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z" />
      <path d="M12.002 7v8.5l-2.016.201a2.715 2.715 0 1 1 0-5.402l2.015.201M16 7v.01M16 10v5.586c0 .905-.36 1.774-1 2.414" />
    </g>
    <defs>
      <clipPath id="brand-django_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandDjango;
