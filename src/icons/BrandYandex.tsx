import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandYandex = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-yandex_svg__a)"
    >
      <path d="M15 20V4h-2a4 4 0 0 0-4 4v1a4 4 0 0 0 4 4h2M9 20l3-7" />
    </g>
    <defs>
      <clipPath id="brand-yandex_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandYandex;
