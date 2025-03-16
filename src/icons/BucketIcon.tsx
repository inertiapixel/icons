import * as React from "react";
import type { SVGProps } from "react";
const SvgBucketIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bucket-icon_svg__a)"
    >
      <path d="M4 7c0 1.06.843 2.078 2.343 2.828S9.878 11 12 11s4.157-.421 5.657-1.172S20 8.061 20 7s-.843-2.078-2.343-2.828S14.122 3 12 3s-4.157.421-5.657 1.172S4 5.939 4 7" />
      <path d="M4 7c0 .664.088 1.324.263 1.965L7 19c.5 1.5 2.239 2 5 2s4.5-.5 5-2q.5-1.5 2.737-10.035A7.5 7.5 0 0 0 20 7" />
    </g>
    <defs>
      <clipPath id="bucket-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBucketIcon;
