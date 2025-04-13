import React from "react";

export const TractorIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61219)">
<path d="M3 15C3 16.0609 3.42143 17.0783 4.17157 17.8284C4.92172 18.5786 5.93913 19 7 19C8.06087 19 9.07828 18.5786 9.82843 17.8284C10.5786 17.0783 11 16.0609 11 15C11 13.9391 10.5786 12.9217 9.82843 12.1716C9.07828 11.4214 8.06087 11 7 11C5.93913 11 4.92172 11.4214 4.17157 12.1716C3.42143 12.9217 3 13.9391 3 15Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 15V15.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17C17 17.5304 17.2107 18.0391 17.5858 18.4142C17.9609 18.7893 18.4696 19 19 19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17C21 16.4696 20.7893 15.9609 20.4142 15.5858C20.0391 15.2107 19.5304 15 19 15C18.4696 15 17.9609 15.2107 17.5858 15.5858C17.2107 15.9609 17 16.4696 17 17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.5 17H17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 15.2V11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10H13L11 5H5V11.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 5H17C16.7348 5 16.4804 5.10536 16.2929 5.29289C16.1054 5.48043 16 5.73478 16 6V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61219">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
