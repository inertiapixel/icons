import React from "react";

export const BrandXamarinIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81137)">
<path d="M15.9579 21H8.04095C7.68989 21 7.34501 20.9076 7.04098 20.732C6.73695 20.5565 6.48448 20.304 6.30895 20L2.26795 13C2.09241 12.696 2 12.3511 2 12C2 11.6489 2.09241 11.304 2.26795 11L6.30895 4C6.48448 3.69597 6.73695 3.4435 7.04098 3.26796C7.34501 3.09243 7.68989 3.00001 8.04095 3H15.9579C16.309 3.00001 16.6539 3.09243 16.9579 3.26796C17.2619 3.4435 17.5144 3.69597 17.6899 4L21.7319 11C21.9075 11.304 21.9999 11.6489 21.9999 12C21.9999 12.3511 21.9075 12.696 21.7319 13L17.6909 20C17.5153 20.3042 17.2627 20.5567 16.9585 20.7323C16.6543 20.9078 16.3092 21.0002 15.9579 21Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 16L9 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 16L15 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81137">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
