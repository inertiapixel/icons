import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandParsinta = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-parsinta_svg__a)"
    >
      <path d="M12 3a9 9 0 1 0 9 9" />
      <path d="M21 12a9 9 0 0 0-9-9" opacity={0.5} />
      <path d="M10 9v6l5-3z" />
    </g>
    <defs>
      <clipPath id="brand-parsinta_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandParsinta;
