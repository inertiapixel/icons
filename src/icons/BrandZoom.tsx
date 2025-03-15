import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandZoom = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-zoom_svg__a)"
    >
      <path d="M17.012 9.385v5.128L21 18V6zM3.887 6h10.08C15.435 6 17 7.203 17 8.803v8.196a.99.99 0 0 1-.975 1H5.652c-1.667 0-2.652-1.5-2.652-3l.01-8a.88.88 0 0 1 .208-.71.84.84 0 0 1 .67-.287z" />
    </g>
    <defs>
      <clipPath id="brand-zoom_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandZoom;
