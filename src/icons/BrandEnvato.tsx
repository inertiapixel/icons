import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandEnvato = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-envato_svg__a)"
    >
      <path d="M4.711 17.877c-.534-1.34-1.35-4.178.129-6.47 1.415-2.193 3.769-3.608 5.099-4.278zM19.714 12.508c-.54 3.409-2.094 6.156-4.155 7.348-4.07 2.353-8.144.45-9.297-.188.877-1.436 4.433-7.22 6.882-10.591C15.858 5.34 19.008 3.099 19.709 3c0 .201.03.55.07 1.03.145 1.709.444 5.264-.065 8.478" />
    </g>
    <defs>
      <clipPath id="brand-envato_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandEnvato;
