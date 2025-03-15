import * as React from "react";
import type { SVGProps } from "react";
const SvgClipboardHeart = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#clipboard-heart_svg__a)"
    >
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 0 4h-2a2 2 0 0 1-2-2M11.992 16.751l2.747-2.815a1.9 1.9 0 0 0 0-2.632 1.775 1.775 0 0 0-2.56 0l-.183.188-.183-.189a1.775 1.775 0 0 0-2.56 0 1.9 1.9 0 0 0 0 2.632l2.738 2.825z" />
    </g>
    <defs>
      <clipPath id="clipboard-heart_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClipboardHeart;
