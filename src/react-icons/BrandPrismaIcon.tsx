import React from "react";

export const BrandPrismaIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81705)">
<path d="M4.18483 16.2032L7.79983 21.5162C8.06483 21.9062 8.55383 22.0862 9.01483 21.9632L19.1808 19.2452C19.3353 19.2054 19.4791 19.132 19.602 19.0304C19.7249 18.9287 19.8239 18.8012 19.8919 18.657C19.96 18.5127 19.9954 18.3553 19.9958 18.1958C19.9961 18.0363 19.9613 17.8787 19.8938 17.7342L12.3888 2.25117C12.3534 2.1787 12.299 2.11714 12.2315 2.073C12.164 2.02886 12.0858 2.00377 12.0052 2.00039C11.9245 1.99701 11.8445 2.01546 11.7735 2.0538C11.7025 2.09213 11.6432 2.14892 11.6018 2.21817L4.14883 15.0562C4.04544 15.2311 3.994 15.4319 4.00056 15.635C4.00711 15.8382 4.07037 16.0352 4.18483 16.2032Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 22L12 2"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81705">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
