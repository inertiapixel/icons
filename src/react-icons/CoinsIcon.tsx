import React from "react";

export const CoinsIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78086)">
<path d="M9 14C9 15.657 11.686 17 15 17C18.314 17 21 15.657 21 14C21 12.343 18.314 11 15 11C11.686 11 9 12.343 9 14Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 14V18C9 19.656 11.686 21 15 21C18.314 21 21 19.656 21 18V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 6C3 7.072 4.144 8.062 6 8.598C7.856 9.134 10.144 9.134 12 8.598C13.856 8.062 15 7.072 15 6C15 4.928 13.856 3.938 12 3.402C10.144 2.866 7.856 2.866 6 3.402C4.144 3.938 3 4.928 3 6Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 6V16C3 16.888 3.772 17.45 5 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 11C3 11.888 3.772 12.45 5 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78086">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
