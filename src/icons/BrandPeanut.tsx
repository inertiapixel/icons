import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandPeanut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#brand-peanut_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m15.001 16.25-.816-.36-.462-.195c-1.444-.592-2-.593-3.447 0l-.462.195-.817.359a4.5 4.5 0 1 1 0-8.49l1.054.462.434.178c1.292.507 1.863.48 3.237-.082l.462-.195.817-.36a4.5 4.5 0 1 1 0 8.49"
      />
    </g>
    <defs>
      <clipPath id="brand-peanut_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandPeanut;
