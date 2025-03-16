import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandMastodonIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-mastodon-icon_svg__a)"
    >
      <path d="M18.648 15.254C16.832 17.017 12 16.88 12 16.88a18.3 18.3 0 0 1-3.288-.256q1.69 2.977 8.982 2.475c-1.945 2.013-13.598 5.257-13.668-7.636L4 10.31c0-3.036.023-4.115 1.352-5.633C7.023 2.766 12 3.01 12 3.01s4.977-.243 6.648 1.667C19.977 6.195 20 7.274 20 10.31s-.456 4.074-1.352 4.944" />
      <path d="M12 11.204V8.278m0 0C12 7.02 11.105 6 10 6S8 7.02 8 8.278V13m4-4.722C12 7.02 12.895 6 14 6s2 1.02 2 2.278V13" />
    </g>
    <defs>
      <clipPath id="brand-mastodon-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandMastodonIcon;
