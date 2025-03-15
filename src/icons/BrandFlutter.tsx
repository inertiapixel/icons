import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandFlutter = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-flutter_svg__a)"
    >
      <path d="m7 14-3-3 8-8h6zM14 21l-5-5 5-5h5l-5 5 5 5z" />
    </g>
    <defs>
      <clipPath id="brand-flutter_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandFlutter;
