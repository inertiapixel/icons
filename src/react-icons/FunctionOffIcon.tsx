import React from "react";

export const FunctionOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73076)">
<path d="M9 15.5V15.75C9 16.44 9.56 17 10.25 17C10.5926 17.0002 10.923 16.8729 11.1769 16.643C11.4309 16.4131 11.5902 16.0969 11.624 15.756L12 12M12.363 8.37L12.376 8.244C12.4098 7.90309 12.5691 7.58692 12.8231 7.357C13.077 7.12707 13.4074 6.99982 13.75 7C14.44 7 15 7.56 15 8.25V8.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V16M19.414 19.414C19.039 19.7891 18.5304 19.9999 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.453 4.22 4.957 4.576 4.595"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 12H12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73076">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
