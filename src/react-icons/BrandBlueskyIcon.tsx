import React from "react";

export const BrandBlueskyIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82675)">
<path d="M6.335 5.14423C4.681 3.94523 2 3.01723 2 5.97023C2 6.56023 2.35 10.9232 2.556 11.6312C3.269 14.0942 5.686 14.3812 8 14.0002C3.955 14.6652 3.111 17.2082 5.333 19.4102C6.363 20.4282 7.246 21.0002 8 21.0002C10 21.0002 11.134 18.2312 11.5 17.5002C11.833 16.8332 12 16.3332 12 16.0002C12 16.3332 12.167 16.8332 12.5 17.5002C12.866 18.2312 14 21.0002 16 21.0002C16.754 21.0002 17.637 20.4292 18.667 19.4102C20.889 17.2072 20.045 14.6642 16 14.0002C18.314 14.3802 20.73 14.0942 21.444 11.6312C21.65 10.9232 22 6.55923 22 5.97023C22 3.01723 19.32 3.94523 17.665 5.14423C15.372 6.80623 12.905 10.1922 12 12.0002C11.095 10.1922 8.628 6.80623 6.335 5.14423Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82675">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
