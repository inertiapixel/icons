import React from "react";

export const FireExtinguisherIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73681)">
<path d="M12 7C13.0609 7 14.0783 7.42143 14.8284 8.17157C15.5786 8.92172 16 9.93913 16 11V20C16 20.2652 15.8946 20.5196 15.7071 20.7071C15.5196 20.8946 15.2652 21 15 21H9C8.73478 21 8.48043 20.8946 8.29289 20.7071C8.10536 20.5196 8 20.2652 8 20V11C8 9.93913 8.42143 8.92172 9.17157 8.17157C9.92172 7.42143 10.9391 7 12 7Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 16H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 5L12 4L16 3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 4H9C8.20435 4 7.44129 4.31607 6.87868 4.87868C6.31607 5.44129 6 6.20435 6 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73681">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
