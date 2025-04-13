import React from "react";

export const BrandTetherIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81375)">
<path d="M14.0785 20.188C12.9285 21.271 11.0585 21.271 9.90848 20.188L2.97848 13.64C2.01848 12.734 1.70848 11.016 2.28848 9.809L4.68848 4.791C5.15848 3.8 6.40848 3 7.46848 3H16.5285C17.5885 3 18.8385 3.802 19.3085 4.79L21.7085 9.809C22.2885 11.016 21.9685 12.734 21.0185 13.639C17.5655 16.932 17.5525 16.918 14.0785 20.188Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 8H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81375">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
