import * as React from "react";
import type { SVGProps } from "react";
const SvgBubble = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#bubble_svg__a)">
      <path
        fill="currentColor"
        d="M12.4 2a6.33 6.33 0 0 1 5.492 3.176l.09.162.126.027a6.335 6.335 0 0 1 4.889 5.934l.004.234a6.333 6.333 0 0 1-6.333 6.334l-.035-.002-.035.05a5.26 5.26 0 0 1-3.958 2.08L12.4 20q-.721 0-1.403-.19l-.047-.014-3.434 2.061a1 1 0 0 1-1.51-.743L6.002 21v-2.434l-.121-.06a3.67 3.67 0 0 1-1.94-3.042l-.006-.197q0-.364.07-.717l.013-.058-.113-.09a5.8 5.8 0 0 1-2.098-4.218l-.005-.25a5.8 5.8 0 0 1 5.8-5.8l.058.001.15-.163a6.32 6.32 0 0 1 4.328-1.967z"
      />
    </g>
    <defs>
      <clipPath id="bubble_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBubble;
