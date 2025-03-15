import * as React from "react";
import type { SVGProps } from "react";
const SvgMichelinStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#michelin-star_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.793 17.063c0 .337.057.618.057.9 0 1.8-1.238 3.037-2.982 3.037-1.8 0-2.98-1.238-2.98-3.206v-.731c-.957.675-1.576.9-2.42.9-1.518 0-2.925-1.463-2.925-3.094 0-1.181.844-2.194 2.082-2.756l.28-.113c-1.574-.787-2.362-1.688-2.362-2.925 0-1.687 1.294-3.094 2.925-3.094.675 0 1.52.338 2.138.788l.281.112c0-.337-.056-.619-.056-.844 0-1.8 1.237-3.037 2.98-3.037 1.8 0 2.981 1.237 2.981 3.206V6.6l-.056.281c.956-.675 1.575-.9 2.419-.9 1.519 0 2.925 1.463 2.925 3.094 0 1.181-.844 2.194-2.081 2.756l-.282.169c1.575.787 2.363 1.688 2.363 2.925 0 1.688-1.294 3.094-2.925 3.094-.675 0-1.575-.281-2.138-.788z"
      />
    </g>
    <defs>
      <clipPath id="michelin-star_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMichelinStar;
