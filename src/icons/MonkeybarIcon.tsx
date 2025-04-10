import React from "react";

export const MonkeybarIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_68331)">
<path d="M3 21V6L8 3L13 6V21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 21V14" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 14H13" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 10C6 9.46957 6.21071 8.96086 6.58579 8.58579C6.96086 8.21071 7.46957 8 8 8C8.53043 8 9.03914 8.21071 9.41421 8.58579C9.78929 8.96086 10 9.46957 10 10" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 13C19 13 16 21 21 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68331">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
