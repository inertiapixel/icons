import React from "react";

export const AirConditioningIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_86159)">
<path d="M8 16C8 16.7956 7.68393 17.5587 7.12132 18.1213C6.55871 18.6839 5.79565 19 5 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 16C16 16.7956 16.3161 17.5587 16.8787 18.1213C17.4413 18.6839 18.2044 19 19 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16V20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V11C21 11.5304 20.7893 12.0391 20.4142 12.4142C20.0391 12.7893 19.5304 13 19 13H5C4.46957 13 3.96086 12.7893 3.58579 12.4142C3.21071 12.0391 3 11.5304 3 11V7Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 13V10C7 9.73478 7.10536 9.48043 7.29289 9.29289C7.48043 9.10536 7.73478 9 8 9H16C16.2652 9 16.5196 9.10536 16.7071 9.29289C16.8946 9.48043 17 9.73478 17 10V13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_86159">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
