import * as React from "react";
import type { SVGProps } from "react";
const SvgLanguageOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#language-off_svg__a)"
    >
      <path d="M4 5h1m4 0h2M9 3v2m-.508 3.517C7.678 11.172 5.972 13 4 13" />
      <path d="M5 9c0 2.144 2.952 3.908 6.7 4M12 20l2.463-5.541m1.228-2.764L16 11l.8 1.8M17.998 18h-5.1M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="language-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLanguageOff;
