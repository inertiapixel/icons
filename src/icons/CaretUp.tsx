import * as React from "react";
import type { SVGProps } from "react";
const SvgCaretUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#caret-up_svg__a)">
      <path
        fill="currentColor"
        d="M11.295 7.293a1 1 0 0 1 1.32-.083l.094.083 6 6 .083.094.054.077.054.096.017.036.027.067.032.108.01.053.01.06.004.057.002.059-.002.059-.005.058-.01.06-.01.052-.031.108-.027.067-.07.132-.065.09-.073.08-.094.084-.077.054-.096.054-.036.017-.067.027-.108.032-.053.01-.06.01-.057.004L18 15h-12c-.851 0-1.296-.986-.782-1.623l.076-.084z"
      />
    </g>
    <defs>
      <clipPath id="caret-up_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCaretUp;
