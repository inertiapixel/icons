import React from "react";

export const TestPipeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61872)">
<path d="M19.9996 8.04L7.87756 20.164C7.61229 20.4293 7.29736 20.6398 6.95074 20.7834C6.60413 20.9271 6.23261 21.001 5.85742 21.0011C5.09968 21.0012 4.37293 20.7002 3.83706 20.1645C3.3012 19.6288 3.00009 18.9021 3 18.1444C2.99991 17.3866 3.30083 16.6599 3.83656 16.124L15.9586 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 13H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 15L20.5 16.6C20.7546 16.8887 20.9205 17.2447 20.9777 17.6253C21.035 18.0059 20.9812 18.3949 20.8229 18.7458C20.6645 19.0966 20.4083 19.3942 20.085 19.603C19.7616 19.8118 19.3849 19.9229 19 19.9229C18.6151 19.9229 18.2384 19.8118 17.915 19.603C17.5917 19.3942 17.3355 19.0966 17.1771 18.7458C17.0188 18.3949 16.965 18.0059 17.0223 17.6253C17.0795 17.2447 17.2454 16.8887 17.5 16.6L19 15Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 3L21 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61872">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
