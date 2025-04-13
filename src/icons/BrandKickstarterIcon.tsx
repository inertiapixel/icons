import React from "react";

export const BrandKickstarterIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82051)">
<path d="M10.9989 9L13.9739 4.35C14.5889 3.45 15.3789 3 16.3509 3C17.1409 3 17.8249 3.286 18.4049 3.858C18.9809 4.432 19.2709 5.114 19.2709 5.912C19.2709 6.5 19.1179 7.021 18.8109 7.471L15.9989 11.5L19.4639 16.412C19.8199 16.872 19.9989 17.412 19.9989 18.025C20.0049 18.4132 19.9335 18.7987 19.7887 19.1589C19.644 19.5191 19.4288 19.8469 19.1559 20.123C18.5949 20.707 17.9139 21 17.1159 21C16.2399 21 15.5709 20.71 15.1159 20.13L11.0039 14.433V17.5C11.0039 18.376 10.6909 19.19 10.3929 19.675C9.84991 20.558 9.04291 21 8.00391 21C7.05991 21 6.25091 20.673 5.73291 20.026C5.24691 19.426 5.00391 18.634 5.00391 17.646V6.275C5.00391 5.341 5.25091 4.569 5.74391 3.962C6.25591 3.321 7.09091 3 8.00391 3C8.87191 3 9.82491 3.321 10.4039 3.962C10.7269 4.318 10.9189 4.676 11.0039 5.042C11.0559 5.266 11.0039 5.685 11.0039 6.302V9H10.9989Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82051">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
