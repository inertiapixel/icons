import React from "react";

export const PaperclipIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67089)">
<path d="M15.0007 7.00045L8.50068 13.5005C8.10286 13.8983 7.87936 14.4378 7.87936 15.0005C7.87936 15.5631 8.10286 16.1026 8.50068 16.5005C8.8985 16.8983 9.43807 17.1218 10.0007 17.1218C10.5633 17.1218 11.1029 16.8983 11.5007 16.5005L18.0007 10.0005C18.7963 9.2048 19.2433 8.12567 19.2433 7.00045C19.2433 5.87523 18.7963 4.7961 18.0007 4.00045C17.205 3.2048 16.1259 2.75781 15.0007 2.75781C13.8755 2.75781 12.7963 3.2048 12.0007 4.00045L5.50068 10.5005C4.30721 11.6939 3.63672 13.3126 3.63672 15.0005C3.63672 16.6883 4.30721 18.307 5.50068 19.5005C6.69415 20.6939 8.31285 21.3644 10.0007 21.3644C11.6885 21.3644 13.3072 20.6939 14.5007 19.5005L21.0007 13.0005"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67089">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
