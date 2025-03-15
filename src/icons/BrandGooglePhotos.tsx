import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandGooglePhotos = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-google-photos_svg__a)"
    >
      <path d="M7.5 7C9.985 7 12 8.974 12 11.409V12H3.603a.61.61 0 0 1-.557-.364.6.6 0 0 1-.046-.227C3 8.974 5.015 7 7.5 7M16.5 17c-2.485 0-4.5-1.974-4.5-4.409V12h8.397c.333 0 .603.265.603.591C21 15.026 18.985 17 16.5 17" />
      <path d="M7 16.5c0-2.485 1.972-4.5 4.405-4.5H12v8.392a.61.61 0 0 1-.366.563.6.6 0 0 1-.229.045C8.972 21 7 18.985 7 16.5M17 7.5c0 2.485-1.972 4.5-4.405 4.5H12V3.603a.61.61 0 0 1 .367-.558.6.6 0 0 1 .228-.045C15.028 3 17 5.015 17 7.5" />
    </g>
    <defs>
      <clipPath id="brand-google-photos_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandGooglePhotos;
