import * as React from "react";
import type { SVGProps } from "react";
const SvgDropletHalf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#droplet-half_svg__a)">
      <path
        fill="currentColor"
        d="m12 2 .07.003a2.41 2.41 0 0 1 1.826.907l.108.148 4.92 7.306c1.952 3.267 1.19 7.42-1.796 9.836-2.968 2.402-7.285 2.402-10.254 0-2.917-2.36-3.711-6.376-1.901-9.65l.134-.232L10 3.058c.185-.275.426-.509.709-.686a2.4 2.4 0 0 1 1.066-.36zm-1 3.149-4.205 6.24c-1.44 2.41-.88 5.463 1.337 7.257A6.1 6.1 0 0 0 11 19.922z"
      />
    </g>
    <defs>
      <clipPath id="droplet-half_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDropletHalf;
