import React from "react";

export const RestoreIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65181)">
<path d="M3.05859 13.0005C3.30401 15.1944 4.34719 17.2216 5.98973 18.6965C7.63228 20.1714 9.75961 20.9912 11.9672 20.9999C14.1747 21.0087 16.3085 20.2058 17.9626 18.7439C19.6168 17.2821 20.676 15.2632 20.9388 13.0714C21.2016 10.8795 20.6496 8.66751 19.3879 6.85606C18.1262 5.04461 16.2427 3.76006 14.0956 3.24673C11.9486 2.73339 9.68775 3.02706 7.74311 4.0719C5.79846 5.11674 4.30566 6.83986 3.54859 8.91355"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 4V9H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65181">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
