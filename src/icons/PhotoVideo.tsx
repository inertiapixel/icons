import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoVideo = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#photo-video_svg__a)"
    >
      <path d="M9 15H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3" />
      <path d="M9 12a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3zM3 12.002l2.296-2.296a2.41 2.41 0 0 1 3.408 0l.296.296" />
      <path d="M14 13.5v3l2.5-1.5zM7 6v.01" />
    </g>
    <defs>
      <clipPath id="photo-video_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhotoVideo;
