import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandNexo = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-nexo_svg__a)"
    >
      <path d="m17 3 5 3v12l-5 3-10-6V9l10 6V9l-5-3z" />
      <path d="M12 6 7 3 2 6v12l5 3 4.7-3.13" />
    </g>
    <defs>
      <clipPath id="brand-nexo_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandNexo;
