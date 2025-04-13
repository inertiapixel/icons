import React from "react";

export const Backspace1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84539)">
<path d="M19.9992 6C20.2644 6 20.5187 6.10536 20.7063 6.29289C20.8938 6.48043 20.9992 6.73478 20.9992 7V17C20.9992 17.2652 20.8938 17.5196 20.7063 17.7071C20.5187 17.8946 20.2644 18 19.9992 18H8.99915L3.99915 13C3.75318 12.725 3.61719 12.369 3.61719 12C3.61719 11.631 3.75318 11.275 3.99915 11L8.99915 6H19.9992Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 10L16 14M16 10L12 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84539">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
