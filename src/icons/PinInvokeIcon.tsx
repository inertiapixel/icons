import React from "react";

export const PinInvokeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_66324)">
<path d="M21 13V18C21 18.2652 20.8946 18.5196 20.7071 18.7071C20.5196 18.8946 20.2652 19 20 19H4C3.73478 19 3.48043 18.8946 3.29289 18.7071C3.10536 18.5196 3 18.2652 3 18V6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H13" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 7C17 7.53043 17.2107 8.03914 17.5858 8.41421C17.9609 8.78929 18.4696 9 19 9C19.5304 9 20.0391 8.78929 20.4142 8.41421C20.7893 8.03914 21 7.53043 21 7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5C18.4696 5 17.9609 5.21071 17.5858 5.58579C17.2107 5.96086 17 6.46957 17 7Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 11H14V15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 15L14 11" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66324">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
