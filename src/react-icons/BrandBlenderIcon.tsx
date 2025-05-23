import React from "react";

export const BrandBlenderIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82683)">
<path d="M9 14C9 15.3261 9.63214 16.5979 10.7574 17.5355C11.8826 18.4732 13.4087 19 15 19C16.5913 19 18.1174 18.4732 19.2426 17.5355C20.3679 16.5979 21 15.3261 21 14C21 12.6739 20.3679 11.4021 19.2426 10.4645C18.1174 9.52678 16.5913 9 15 9C13.4087 9 11.8826 9.52678 10.7574 10.4645C9.63214 11.4021 9 12.6739 9 14Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 14C14 14.2652 14.1054 14.5196 14.2929 14.7071C14.4804 14.8946 14.7348 15 15 15C15.2652 15 15.5196 14.8946 15.7071 14.7071C15.8946 14.5196 16 14.2652 16 14C16 13.7348 15.8946 13.4804 15.7071 13.2929C15.5196 13.1054 15.2652 13 15 13C14.7348 13 14.4804 13.1054 14.2929 13.2929C14.1054 13.4804 14 13.7348 14 14Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 16L12 9.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 9H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 5L18.65 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82683">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
