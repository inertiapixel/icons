import React from "react";

export const Clock24Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78615)">
<path d="M8.998 20.485C7.24371 19.8643 5.72495 18.7151 4.6508 17.1955C3.57664 15.676 2.99991 13.8609 3 12C3 10.8181 3.23279 9.64778 3.68508 8.55585C4.13738 7.46392 4.80031 6.47177 5.63604 5.63604C6.47177 4.80031 7.46392 4.13738 8.55585 3.68508C9.64778 3.23279 10.8181 3 12 3C13.1819 3 14.3522 3.23279 15.4442 3.68508C16.5361 4.13738 17.5282 4.80031 18.364 5.63604C19.1997 6.47177 19.8626 7.46392 20.3149 8.55585C20.7672 9.64778 21 10.8181 21 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15H14C14.2652 15 14.5196 15.1054 14.7071 15.2929C14.8946 15.4804 15 15.7348 15 16V17C15 17.2652 14.8946 17.5196 14.7071 17.7071C14.5196 17.8946 14.2652 18 14 18H13C12.7348 18 12.4804 18.1054 12.2929 18.2929C12.1054 18.4804 12 18.7348 12 19V20C12 20.2652 12.1054 20.5196 12.2929 20.7071C12.4804 20.8946 12.7348 21 13 21H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 15V17C18 17.2652 18.1054 17.5196 18.2929 17.7071C18.4804 17.8946 18.7348 18 19 18H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 15V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78615">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
