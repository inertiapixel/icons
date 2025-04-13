import React from "react";

export const MilkshakeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_68382)">
<path d="M17 10C17 8.67392 16.4732 7.40215 15.5355 6.46447C14.5979 5.52678 13.3261 5 12 5C10.6739 5 9.40215 5.52678 8.46447 6.46447C7.52678 7.40215 7 8.67392 7 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 11C6 10.7348 6.10536 10.4804 6.29289 10.2929C6.48043 10.1054 6.73478 10 7 10H17C17.2652 10 17.5196 10.1054 17.7071 10.2929C17.8946 10.4804 18 10.7348 18 11V12C18 12.2652 17.8946 12.5196 17.7071 12.7071C17.5196 12.8946 17.2652 13 17 13H7C6.73478 13 6.48043 12.8946 6.29289 12.7071C6.10536 12.5196 6 12.2652 6 12V11Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 13L8.81 20.243C8.86417 20.4592 8.98905 20.6512 9.16479 20.7883C9.34054 20.9255 9.55707 21 9.78 21H14.22C14.4429 21 14.6595 20.9255 14.8352 20.7883C15.011 20.6512 15.1358 20.4592 15.19 20.243L17 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 5V3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68382">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
