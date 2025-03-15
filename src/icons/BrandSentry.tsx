import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandSentry = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#brand-sentry_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 18c-.006.381.1.756.306 1.076A2 2 0 0 0 4.89 20c.646.034-.537 0 .11 0h3a4.99 4.99 0 0 0-3.66-4.81q.838-1.459 2.04-3.53A9 9 0 0 1 12 20h4m0 0h3a2 2 0 0 0 1.84-2.75L13.74 5a2 2 0 0 0-3.5 0L8.4 8.178C12.882 10.227 16 14.747 16 20"
      />
    </g>
    <defs>
      <clipPath id="brand-sentry_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandSentry;
