import React from "react";

export const EditCircleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_74922)">
<path d="M12 15.0001L20.385 6.58511C20.7788 6.19126 21.0001 5.65709 21.0001 5.10011C21.0001 4.54312 20.7788 4.00895 20.385 3.61511C19.9912 3.22126 19.457 3 18.9 3C18.343 3 17.8088 3.22126 17.415 3.61511L9 12.0001V15.0001H12Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 5L19 8" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.0009 7.07031C7.24669 7.32025 5.65254 8.22616 4.54001 9.6053C3.42749 10.9844 2.87938 12.7342 3.00626 14.5015C3.13314 16.2689 3.92555 17.9224 5.22366 19.1285C6.52177 20.3346 8.22898 21.0035 10.0009 21.0003C11.6843 21.0005 13.3114 20.394 14.584 19.2921C15.8566 18.1901 16.6894 16.6664 16.9299 15.0003" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74922">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
