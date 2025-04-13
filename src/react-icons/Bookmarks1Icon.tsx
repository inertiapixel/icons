import React from "react";

export const Bookmarks1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_83516)">
<path d="M15 10V21L10 18L5 21V10C5 9.20435 5.31607 8.44129 5.87868 7.87868C6.44129 7.31607 7.20435 7 8 7H12C12.7956 7 13.5587 7.31607 14.1213 7.87868C14.6839 8.44129 15 9.20435 15 10Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 3H16C16.7956 3 17.5587 3.31607 18.1213 3.87868C18.6839 4.44129 19 5.20435 19 6V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83516">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
