import React from "react";

export const SquareRotatedForbidIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62835)">
<path d="M13.4459 2.59993L21.4009 10.5539C21.7844 10.9374 21.9999 11.4576 21.9999 11.9999C21.9999 12.5423 21.7844 13.0624 21.4009 13.4459L13.4459 21.4009C13.0624 21.7844 12.5423 21.9999 11.9999 21.9999C11.4576 21.9999 10.9374 21.7844 10.5539 21.4009L2.59893 13.4459C2.21544 13.0624 2 12.5423 2 11.9999C2 11.4576 2.21544 10.9374 2.59893 10.5539L10.5539 2.59893C10.9374 2.21544 11.4576 2 11.9999 2C12.5423 2 13.0624 2.21644 13.4459 2.59993Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 14.5L14.5 9.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62835">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
