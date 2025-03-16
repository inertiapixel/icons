import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoAiIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#photo-ai-icon_svg__a)"
    >
      <path d="M15 8h.01M10 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5" />
      <path d="m3 16.002 5-5c.928-.893 2.072-.893 3 0l1 1M14 21v-4a2 2 0 0 1 4 0v4M14 19h4M21 15v6" />
    </g>
    <defs>
      <clipPath id="photo-ai-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhotoAiIcon;
