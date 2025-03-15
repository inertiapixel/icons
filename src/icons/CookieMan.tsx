import * as React from "react";
import type { SVGProps } from "react";
const SvgCookieMan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#cookie-man_svg__a)">
      <path
        fill="currentColor"
        d="m12.008 1 .238.005a6 6 0 0 1 5.405 3.974l.078.233a6 6 0 0 1-.182 4.08l-.093.21.05-.002a2.94 2.94 0 0 1 2.638 1.511l.08.158a2.887 2.887 0 0 1-1.233 3.764l-.19.096L17 15.85v.963l1.166 1.166.14.154a2.96 2.96 0 0 1-.17 4.002c-1.087 1.088-2.827 1.161-4.03.144l-.16-.146L12 20.185l-1.946 1.947a2.96 2.96 0 0 1-3.95.22l-.15-.128c-1.17-1.073-1.284-2.879-.234-4.12l.146-.158L7 16.812v-.962l-1.834-.84-.181-.093a2.88 2.88 0 0 1-1.205-3.75 2.93 2.93 0 0 1 2.646-1.661l.13.003-.03-.064a6.1 6.1 0 0 1-.503-1.968l-.017-.26V7a6 6 0 0 1 5.775-5.996L12.006 1zm.003 15H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2m0-3H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2m0-5H12a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2m-2-3H10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2m4 0H14a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2"
      />
    </g>
    <defs>
      <clipPath id="cookie-man_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCookieMan;
