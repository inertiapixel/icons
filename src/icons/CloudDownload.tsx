import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudDownload = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cloud-download_svg__a)"
    >
      <path d="M19 18a3.5 3.5 0 1 0 0-7h-1c.145-.65.148-1.32.006-1.971a4.8 4.8 0 0 0-.832-1.823 5.4 5.4 0 0 0-1.543-1.397 6 6 0 0 0-2.02-.76 6.2 6.2 0 0 0-2.19-.006 6 6 0 0 0-2.025.749C8.156 6.532 7.294 7.686 7 8.999a4.75 4.75 0 0 0-2.965.886 4.4 4.4 0 0 0-1.7 2.487 4.23 4.23 0 0 0 .34 2.954A4.5 4.5 0 0 0 4.9 17.399M12 13v9M9 19l3 3 3-3" />
    </g>
    <defs>
      <clipPath id="cloud-download_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCloudDownload;
