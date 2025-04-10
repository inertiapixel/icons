import React from "react";

export const ScubaMaskIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_64440)">
<path d="M4 7H16C16.2652 7 16.5196 7.10536 16.7071 7.29289C16.8946 7.48043 17 7.73478 17 8V12.5C17 13.163 16.7366 13.7989 16.2678 14.2678C15.7989 14.7366 15.163 15 14.5 15H14C13.4696 15 12.9609 14.7893 12.5858 14.4142C12.2107 14.0391 12 13.5304 12 13C12 12.4696 11.7893 11.9609 11.4142 11.5858C11.0391 11.2107 10.5304 11 10 11C9.46957 11 8.96086 11.2107 8.58579 11.5858C8.21071 11.9609 8 12.4696 8 13C8 13.5304 7.78929 14.0391 7.41421 14.4142C7.03914 14.7893 6.53043 15 6 15H5.5C4.83696 15 4.20107 14.7366 3.73223 14.2678C3.26339 13.7989 3 13.163 3 12.5V8C3 7.73478 3.10536 7.48043 3.29289 7.29289C3.48043 7.10536 3.73478 7 4 7Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 17C10 17.5304 10.2107 18.0391 10.5858 18.4142C10.9609 18.7893 11.4696 19 12 19H15.5C16.9587 19 18.3576 18.4205 19.3891 17.3891C20.4205 16.3576 21 14.9587 21 13.5V4" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64440">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
