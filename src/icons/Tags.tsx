import * as React from "react";
import type { SVGProps } from "react";
const SvgTags = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#tags_svg__a)"
    >
      <path d="M3 8v4.172a2 2 0 0 0 .586 1.414l5.71 5.71a2.41 2.41 0 0 0 3.408 0l3.592-3.592a2.41 2.41 0 0 0 0-3.408l-5.71-5.71A2 2 0 0 0 9.172 6H5a2 2 0 0 0-2 2" />
      <path d="m18 19 1.592-1.592a4.82 4.82 0 0 0 0-6.816L15 6M6.998 10h-.01" />
    </g>
    <defs>
      <clipPath id="tags_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTags;
