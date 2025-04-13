import React from "react";

export const CatIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_79899)">
<path d="M20 3V13C20 15.1217 19.1571 17.1566 17.6569 18.6569C16.1566 20.1571 14.1217 21 12 21C9.87827 21 7.84344 20.1571 6.34315 18.6569C4.84285 17.1566 4 15.1217 4 13V3L7.432 6.432C8.77175 5.49743 10.3665 4.9975 12 5C13.769 5 15.403 5.574 16.728 6.546L20 3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 16H7L3 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 16H17L21 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16C13 15.7348 12.8946 15.4804 12.7071 15.2929C12.5196 15.1054 12.2652 15 12 15C11.7348 15 11.4804 15.1054 11.2929 15.2929C11.1054 15.4804 11 15.7348 11 16Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 11V11.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 11V11.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79899">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
