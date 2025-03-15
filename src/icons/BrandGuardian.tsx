import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandGuardian = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-guardian_svg__a)"
    >
      <path d="M14 13h6M4 12.001c0-9.296 9.5-9 9.5-9-2.808 0-4.5 4.373-4.5 9s1.763 8.976 4.572 8.976C13.572 21 4 22.07 4 12.001M14.5 3c1.416 0 3.853 1.16 4.5 2v3.5M15 13v8s2.77-.37 4-2v-6M13.5 21H15M13.5 3h1" />
    </g>
    <defs>
      <clipPath id="brand-guardian_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandGuardian;
