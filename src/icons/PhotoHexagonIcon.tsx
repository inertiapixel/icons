import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoHexagonIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#photo-hexagon-icon_svg__a)"
    >
      <path d="M15 8h.01M19.875 6.27c.7.398 1.13 1.143 1.125 1.948v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.81.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z" />
      <path d="m3.5 15.502 4.5-4.5c.928-.893 2.072-.893 3 0l5 5M14 14.002l1-1c.928-.893 2.072-.893 3 0l2.5 2.5" />
    </g>
    <defs>
      <clipPath id="photo-hexagon-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhotoHexagonIcon;
