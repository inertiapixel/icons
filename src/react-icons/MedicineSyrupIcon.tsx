import React from "react";

export const MedicineSyrupIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_68980)">
<path d="M8 21H16C16.2652 21 16.5196 20.8946 16.7071 20.7071C16.8946 20.5196 17 20.2652 17 20V10C17 9.20435 16.6839 8.44129 16.1213 7.87868C15.5587 7.31607 14.7956 7 14 7H10C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10V20C7 20.2652 7.10536 20.5196 7.29289 20.7071C7.48043 20.8946 7.73478 21 8 21Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 14H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 7V4C10 3.73478 10.1054 3.48043 10.2929 3.29289C10.4804 3.10536 10.7348 3 11 3H13C13.2652 3 13.5196 3.10536 13.7071 3.29289C13.8946 3.48043 14 3.73478 14 4V7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68980">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
