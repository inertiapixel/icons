import * as React from "react";
import type { SVGProps } from "react";
const SvgMickey = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#mickey_svg__a)">
      <path
        fill="currentColor"
        d="M18.5 2a4.5 4.5 0 0 1 .879 8.913 8 8 0 1 1-15.374 3.372L4 14l.005-.285a8 8 0 0 1 .615-2.803 4.5 4.5 0 0 1-3.187-6.348 4.5 4.5 0 0 1 3.596-2.539l.225-.018.28-.007.245.009a4.5 4.5 0 0 1 4.215 4.247 8 8 0 0 1 4.013 0A4.5 4.5 0 0 1 18.5 2"
      />
    </g>
    <defs>
      <clipPath id="mickey_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMickey;
