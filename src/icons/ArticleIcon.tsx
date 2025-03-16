import * as React from "react";
import type { SVGProps } from "react";
const SvgArticleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#article-icon_svg__a)">
      <path
        fill="currentColor"
        d="M19 3a3 3 0 0 1 2.995 2.824L22 6v12a3 3 0 0 1-2.824 2.995L19 21H5a3 3 0 0 1-2.995-2.824L2 18V6a3 3 0 0 1 2.824-2.995L5 3zm-2 12H7l-.117.007a1 1 0 0 0 0 1.986L7 17h10l.117-.007a1 1 0 0 0 0-1.986zm0-4H7l-.117.007a1 1 0 0 0 0 1.986L7 13h10l.117-.007a1 1 0 0 0 0-1.986zm0-4H7l-.117.007a1 1 0 0 0 0 1.986L7 9h10l.117-.007a1 1 0 0 0 0-1.986z"
      />
    </g>
    <defs>
      <clipPath id="article-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArticleIcon;
