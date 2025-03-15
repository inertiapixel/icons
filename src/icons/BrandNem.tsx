import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandNem = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-nem_svg__a)"
    >
      <path d="M12.182 2q2.91.033 5.818 1.08l.364.135A23 23 0 0 1 22 5q0 8.427-5.87 13.92-1.86 1.858-3.78 2.898L12 22q-2.1-1.054-4.13-3.079Q2.001 13.427 2 5q3.817-2.29 7.636-2.832L10 2.12q.905-.11 1.818-.12z" />
      <path d="M2.102 7.068q3.11 10.08 9.9 2.93 0-6 4.07-7.06l.59-.11" />
      <path d="M16.35 18.51S19 13 12 10" />
    </g>
    <defs>
      <clipPath id="brand-nem_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandNem;
