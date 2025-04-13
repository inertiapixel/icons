import React from "react";

export const LayoutAlignBottomIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57883)">
<path d="M20 19C20.2652 19 20.5196 19.1054 20.7071 19.2929C20.8946 19.4804 21 19.7348 21 20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20C3 19.7348 3.10536 19.4804 3.29289 19.2929C3.48043 19.1054 3.73478 19 4 19H20Z" fill="black"/>
<path d="M13 3C13.7956 3 14.5587 3.31607 15.1213 3.87868C15.6839 4.44129 16 5.20435 16 6V14C16 14.7956 15.6839 15.5587 15.1213 16.1213C14.5587 16.6839 13.7956 17 13 17H11C10.2044 17 9.44129 16.6839 8.87868 16.1213C8.31607 15.5587 8 14.7956 8 14V6C8 5.20435 8.31607 4.44129 8.87868 3.87868C9.44129 3.31607 10.2044 3 11 3H13Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57883">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
