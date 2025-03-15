import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageCircleHeart = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#message-circle-heart_svg__a)"
    >
      <path d="M10.59 19.882a9.8 9.8 0 0 1-2.89-.88l-4.7 1 1.3-3.9C1.976 12.665 2.874 8.23 6.4 5.728c3.526-2.501 8.59-2.296 11.845.48 1.565 1.335 2.479 3.065 2.71 4.86" />
      <path d="m18 22 3.35-3.284a2.14 2.14 0 0 0 .005-3.071 2.24 2.24 0 0 0-3.129-.006l-.224.22-.223-.22a2.24 2.24 0 0 0-3.128-.006 2.143 2.143 0 0 0-.006 3.07z" />
    </g>
    <defs>
      <clipPath id="message-circle-heart_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMessageCircleHeart;
