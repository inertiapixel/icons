import React from "react";

export const GavelIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73020)">
<path d="M13 10L20.383 17.418C21.206 18.238 21.206 19.566 20.383 20.385C19.9876 20.7783 19.4527 20.999 18.895 20.999C18.3373 20.999 17.8024 20.7783 17.407 20.385L10 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 9L10 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 10L9 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 21H10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.79285 15.7928L3.20685 12.2068C3.01938 12.0193 2.91406 11.765 2.91406 11.4998C2.91406 11.2347 3.01938 10.9804 3.20685 10.7928L5.49985 8.49985L5.99985 8.99985L8.99985 5.99985L8.49985 5.49985L10.7928 3.20685C10.9804 3.01938 11.2347 2.91406 11.4998 2.91406C11.765 2.91406 12.0193 3.01938 12.2068 3.20685L15.7928 6.79285C15.9803 6.98038 16.0856 7.23468 16.0856 7.49985C16.0856 7.76501 15.9803 8.01932 15.7928 8.20685L13.4998 10.4998L12.9998 9.99985L9.99985 12.9998L10.4998 13.4998L8.20685 15.7928C8.01932 15.9803 7.76501 16.0856 7.49985 16.0856C7.23468 16.0856 6.98038 15.9803 6.79285 15.7928Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73020">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
