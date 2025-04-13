import React from "react";

export const MatchstickIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69221)">
<path d="M3 21L17 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 12C16 12.2652 16.1054 12.5196 16.2929 12.7071C16.4804 12.8946 16.7348 13 17 13C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11C16.7348 11 16.4804 11.1054 16.2929 11.2929C16.1054 11.4804 16 11.7348 16 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.9986 3L20.6186 10.29C20.9667 11.0299 21.08 11.8586 20.9434 12.6647C20.8069 13.4709 20.4269 14.216 19.8546 14.8C19.1955 15.4715 18.3208 15.8892 17.3842 15.9795C16.4477 16.0699 15.5092 15.8272 14.7339 15.2942C13.9585 14.7611 13.3959 13.9718 13.1449 13.065C12.8939 12.1581 12.9707 11.1919 13.3616 10.336L16.9986 3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69221">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
