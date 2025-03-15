import * as React from "react";
import type { SVGProps } from "react";
const SvgClubs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#clubs_svg__a)">
      <path
        fill="currentColor"
        d="M11.999 2A5 5 0 0 0 7.51 4.797l-.103.225a5 5 0 0 0-.334 2.837l.027.14a5 5 0 0 0-3.091 9.009l.198.14a5 5 0 0 0 4.42.58l.174-.066-.773 3.095A1 1 0 0 0 8.999 22h6l.113-.006a1 1 0 0 0 .857-1.237l-.774-3.095.174.065A4.999 4.999 0 1 0 16.896 8l.028-.14A4.997 4.997 0 0 0 11.999 2"
      />
    </g>
    <defs>
      <clipPath id="clubs_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClubs;
