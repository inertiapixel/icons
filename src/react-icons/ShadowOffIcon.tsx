import React from "react";

export const ShadowOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64150)">
<path d="M5.63496 5.63925C3.9699 7.33178 3.0411 9.61369 3.05086 11.9879C3.06062 14.3622 4.00815 16.6363 5.68707 18.3151C7.36599 19.9939 9.64026 20.9413 12.0145 20.9508C14.3887 20.9604 16.6706 20.0314 18.363 18.3663M20.043 16.0463C20.8951 14.3552 21.1922 12.4384 20.8919 10.5688C20.5916 8.69909 19.7092 6.97178 18.3703 5.63267C17.0314 4.29355 15.3042 3.41087 13.4346 3.11024C11.565 2.80962 9.64815 3.10636 7.95696 3.95825"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 12H18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 15H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 18H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 9H17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 6H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64150">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
