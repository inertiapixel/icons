import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#photo-off-icon_svg__a)"
    >
      <path d="M15 8h.01M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099A3 3 0 0 1 18 21H6a3 3 0 0 1-3-3V6c0-.845.349-1.608.91-2.153" />
      <path d="m3 16.002 5-5c.928-.893 2.072-.893 3 0l5 5M16.328 12.336c.574-.054 1.155.166 1.67.662l3 3M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="photo-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhotoOffIcon;
