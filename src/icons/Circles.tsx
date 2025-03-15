import * as React from "react";
import type { SVGProps } from "react";
const SvgCircles = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#circles_svg__a)">
      <path d="M6.5 12a5 5 0 1 1-4.995 5.217L1.5 17l.005-.217A5 5 0 0 1 6.5 12M17.5 12a5 5 0 1 1-4.995 5.217L12.5 17l.005-.217A5 5 0 0 1 17.5 12M12 2a5 5 0 1 1-4.995 5.217L7 7l.005-.217A5 5 0 0 1 12 2" />
    </g>
    <defs>
      <clipPath id="circles_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCircles;
