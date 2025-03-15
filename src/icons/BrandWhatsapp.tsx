import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandWhatsapp = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-whatsapp_svg__a)"
    >
      <path d="m3 20.999 1.65-3.8a9 9 0 1 1 3.4 2.9z" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 1 0-1 0zm0 0a5 5 0 0 0 5 5m0 0h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </g>
    <defs>
      <clipPath id="brand-whatsapp_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandWhatsapp;
