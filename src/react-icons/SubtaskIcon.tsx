import React from "react";

export const SubtaskIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62345)">
<path d="M6 9H12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 5H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 5V16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 8C12 7.73478 12.1054 7.48043 12.2929 7.29289C12.4804 7.10536 12.7348 7 13 7H19C19.2652 7 19.5196 7.10536 19.7071 7.29289C19.8946 7.48043 20 7.73478 20 8V10C20 10.2652 19.8946 10.5196 19.7071 10.7071C19.5196 10.8946 19.2652 11 19 11H13C12.7348 11 12.4804 10.8946 12.2929 10.7071C12.1054 10.5196 12 10.2652 12 10V8Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16C12 15.7348 12.1054 15.4804 12.2929 15.2929C12.4804 15.1054 12.7348 15 13 15H19C19.2652 15 19.5196 15.1054 19.7071 15.2929C19.8946 15.4804 20 15.7348 20 16V18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H13C12.7348 19 12.4804 18.8946 12.2929 18.7071C12.1054 18.5196 12 18.2652 12 18V16Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62345">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
