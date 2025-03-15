import * as React from "react";
import type { SVGProps } from "react";
const SvgBeach = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#beach_svg__a)"
    >
      <path d="M17.551 16.751a7.5 7.5 0 0 0-10.606 0M18 3.804A6 6 0 0 0 9.806 6l10.392 6A6 6 0 0 0 18 3.804" />
      <path d="M16.734 10C18.39 7.13 18.958 4.354 18 3.802S14.927 5.13 13.27 8M15 9l-3 5.196M3 19.25A2.4 2.4 0 0 1 4 19a2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 1 .25" />
    </g>
    <defs>
      <clipPath id="beach_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBeach;
