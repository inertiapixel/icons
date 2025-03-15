import * as React from "react";
import type { SVGProps } from "react";
const SvgPin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#pin_svg__a)">
      <path
        fill="currentColor"
        d="m15.112 3.209.094.083 5.5 5.5a1 1 0 0 1-1.175 1.59l-3.172 3.17-1.424 3.798a1 1 0 0 1-.158.277l-.07.08-1.5 1.5a1 1 0 0 1-1.32.082l-.095-.083-2.793-2.792-3.793 3.792a1 1 0 0 1-1.497-1.32l.083-.094 3.792-3.793-2.792-2.793a1 1 0 0 1-.083-1.32l.083-.094 1.5-1.5a1 1 0 0 1 .258-.187l.098-.042 3.796-1.425 3.17-3.17a1 1 0 0 1 1.498-1.26"
      />
    </g>
    <defs>
      <clipPath id="pin_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPin;
