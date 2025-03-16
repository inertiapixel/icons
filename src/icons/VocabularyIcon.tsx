import * as React from "react";
import type { SVGProps } from "react";
const SvgVocabularyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#vocabulary-icon_svg__a)"
    >
      <path d="M10 19H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a2 2 0 0 1 2 2 2 2 0 0 1 2-2h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-6a2 2 0 0 0-2 2 2 2 0 0 0-2-2M12 5v16M7 7h1M7 11h1M16 7h1M16 11h1M16 15h1" />
    </g>
    <defs>
      <clipPath id="vocabulary-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVocabularyIcon;
