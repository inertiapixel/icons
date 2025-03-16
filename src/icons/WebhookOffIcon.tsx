import * as React from "react";
import type { SVGProps } from "react";
const SvgWebhookOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#webhook-off-icon_svg__a)"
    >
      <path d="M4.876 13.61A4 4 0 1 0 11 17h6M15.066 20.502a4 4 0 0 0 4.763-.675M21 17a4 4 0 0 0-4-4" />
      <path d="M16 8a4 4 0 0 0-6.824-2.833M8 8c0 1.506.77 2.818 2 3.5L7 17M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="webhook-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWebhookOffIcon;
