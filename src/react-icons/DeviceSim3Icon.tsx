import React from "react";

export const DeviceSim3Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_75957)">
<path d="M6 3H14.5L19 7.5V20C19 20.2652 18.8946 20.5196 18.7071 20.7071C18.5196 20.8946 18.2652 21 18 21H6C5.73478 21 5.48043 20.8946 5.29289 20.7071C5.10536 20.5196 5 20.2652 5 20V4C5 3.73478 5.10536 3.48043 5.29289 3.29289C5.48043 3.10536 5.73478 3 6 3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 9H12.5C12.8978 9 13.2794 9.15804 13.5607 9.43934C13.842 9.72064 14 10.1022 14 10.5V11.5C14 11.8978 13.842 12.2794 13.5607 12.5607C13.2794 12.842 12.8978 13 12.5 13M12.5 13H11M12.5 13C12.8978 13 13.2794 13.158 13.5607 13.4393C13.842 13.7206 14 14.1022 14 14.5V15.5C14 15.8978 13.842 16.2794 13.5607 16.5607C13.2794 16.842 12.8978 17 12.5 17H10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75957">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
