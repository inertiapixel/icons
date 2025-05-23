import React from "react";

export const RefreshDotIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65330)">
<path d="M20 11.0007C19.7554 9.2409 18.9391 7.61034 17.6766 6.36018C16.4142 5.11001 14.7758 4.3096 13.0137 4.08224C11.2516 3.85487 9.46362 4.21316 7.9252 5.10193C6.38678 5.99069 5.18325 7.36062 4.5 9.00068M4 5.00068V9.00068H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 13C4.24456 14.7598 5.06093 16.3903 6.32336 17.6405C7.58579 18.8907 9.22424 19.6911 10.9863 19.9184C12.7484 20.1458 14.5364 19.7875 16.0748 18.8988C17.6132 18.01 18.8168 16.6401 19.5 15M20 19V15H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65330">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
