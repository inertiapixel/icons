import * as React from "react";
import type { SVGProps } from "react";
const SvgLivePhoto = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#live-photo_svg__a)"
    >
      <path d="M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
      <path d="M7 12a5 5 0 1 0 10 0 5 5 0 0 0-10 0M15.898 20.11v.01M19.04 17.61v.01M20.77 14v.01M20.77 10v.01M19.04 6.39v.01M15.898 3.89v.01M12 3v.01M8.102 3.89v.01M4.96 6.39v.01M3.23 10v.01M3.23 14v.01M4.96 17.61v.01M8.102 20.11v.01M12 21v.01" />
    </g>
    <defs>
      <clipPath id="live-photo_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLivePhoto;
