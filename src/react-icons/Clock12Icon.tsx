import React from "react";

export const Clock12Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78629)">
<path d="M12 21C9.61305 21 7.32387 20.0518 5.63604 18.364C3.94821 16.6761 3 14.3869 3 12C3 10.8181 3.23279 9.64778 3.68508 8.55585C4.13738 7.46392 4.80031 6.47177 5.63604 5.63604C6.47177 4.80031 7.46392 4.13738 8.55585 3.68508C9.64778 3.23279 10.8181 3 12 3C13.1819 3 14.3522 3.23279 15.4442 3.68508C16.5361 4.13738 17.5282 4.80031 18.364 5.63604C19.1997 6.47177 19.8626 7.46392 20.3149 8.55585C20.7672 9.64778 21 10.8181 21 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V12L12.5 12.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 15H20C20.2652 15 20.5196 15.1054 20.7071 15.2929C20.8946 15.4804 21 15.7348 21 16V17C21 17.2652 20.8946 17.5196 20.7071 17.7071C20.5196 17.8946 20.2652 18 20 18H19C18.7348 18 18.4804 18.1054 18.2929 18.2929C18.1054 18.4804 18 18.7348 18 19V20C18 20.2652 18.1054 20.5196 18.2929 20.7071C18.4804 20.8946 18.7348 21 19 21H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 21V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78629">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
