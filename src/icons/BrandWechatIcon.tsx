import React from "react";

export const BrandWechatIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81190)">
<path d="M16.5 10C19.538 10 22 12.015 22 14.5C22 15.897 21.222 17.145 20 17.97V20L18.036 18.822C17.5327 18.9409 17.0172 19.0006 16.5 19C13.462 19 11 16.985 11 14.5C11 12.015 13.462 10 16.5 10Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.197 15.698C10.507 15.894 9.767 16 9 16C8.1114 16.0019 7.22867 15.8559 6.388 15.568L4 17V14.199C2.763 13.117 2 11.635 2 10C2 6.686 5.134 4 9 4C12.782 4 15.863 6.57 16 9.785V10.018"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 8H10.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 8H7.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 14H15.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 14H18.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81190">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
