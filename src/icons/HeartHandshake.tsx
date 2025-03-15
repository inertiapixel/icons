import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartHandshake = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#heart-handshake_svg__a)"
    >
      <path d="M19.501 12.572 12.001 20l-7.5-7.428a5 5 0 1 1 7.5-6.566 5 5 0 1 1 7.5 6.572" />
      <path d="M12 6 8.707 9.293a1 1 0 0 0 0 1.414l.543.543c.69.69 1.81.69 2.5 0l1-1a3.18 3.18 0 0 1 4.5 0l2.25 2.25M12.5 15.5l2 2M15 13l2 2" />
    </g>
    <defs>
      <clipPath id="heart-handshake_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeartHandshake;
