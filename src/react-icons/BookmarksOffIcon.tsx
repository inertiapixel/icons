import React from "react";

export const BookmarksOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_83520)">
<path d="M11 7H13C13.5304 7 14.0391 7.21071 14.4142 7.58579C14.7893 7.96086 15 8.46957 15 9V11M15 15V21L10 18L5 21V9C5 8.46957 5.21071 7.96086 5.58579 7.58579C5.96086 7.21071 6.46957 7 7 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.26562 4C9.44141 3.69553 9.69435 3.44278 9.99895 3.26721C10.3036 3.09165 10.6491 2.99948 11.0006 3H17.0006C17.5311 3 18.0398 3.21072 18.4148 3.58579C18.7899 3.96086 19.0006 4.46957 19.0006 5V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83520">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
