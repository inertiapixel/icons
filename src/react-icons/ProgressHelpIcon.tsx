import React from "react";

export const ProgressHelpIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65717)">
<path d="M12 16V16.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12.9998C12.4498 13.0011 12.8868 12.8508 13.2407 12.5732C13.5945 12.2956 13.8444 11.9068 13.95 11.4696C14.0557 11.0324 14.0109 10.5724 13.8229 10.1638C13.6349 9.75524 13.3147 9.42195 12.914 9.21776C12.5162 9.01397 12.0611 8.95079 11.6228 9.03848C11.1845 9.12618 10.7888 9.3596 10.5 9.70076"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.99953 20.7776C9.12914 20.5802 8.29321 20.2535 7.51953 19.8086"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 3.22266C15.9882 3.67673 17.7632 4.79235 19.0347 6.38686C20.3061 7.98138 20.9984 9.96031 20.9984 11.9997C20.9984 14.039 20.3061 16.0179 19.0347 17.6125C17.7632 19.207 15.9882 20.3226 14 20.7767"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.57856 17.092C4.03307 16.2995 3.61876 15.4243 3.35156 14.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.125 10.4995C3.285 9.54953 3.593 8.64953 4.025 7.82453L4.194 7.51953"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.90625 4.57866C7.8419 3.93456 8.89157 3.47437 9.99925 3.22266"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65717">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
