import * as React from "react";
import type { SVGProps } from "react";
const SvgRecycle = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#recycle_svg__a)"
    >
      <path d="m12 17-2 2 2 2" />
      <path d="M10 19h9a2 2 0 0 0 1.75-2.75l-.55-1M8.534 11.002 7.802 8.27l-2.732.732" />
      <path d="m7.804 8.27-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141.023M15.465 11l2.732.732L18.929 9" />
      <path d="m18.195 11.733-4.5-7.794a2 2 0 0 0-3.256-.14l-.591.976" />
    </g>
    <defs>
      <clipPath id="recycle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRecycle;
