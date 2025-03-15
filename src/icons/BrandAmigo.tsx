import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandAmigo = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-amigo_svg__a)"
    >
      <path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M9.59 3.635 2.46 17.717c-1.711 3.38 1.76 5.45 3.69 3.573l1.86-1.81c3.143-3.054 4.96-2.99 8.04.11l1.329 1.337c2.372 2.387 5.865.078 4.176-3.225L14.36 3.635c-1.114-2.18-3.665-2.18-4.77 0" />
    </g>
    <defs>
      <clipPath id="brand-amigo_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandAmigo;
