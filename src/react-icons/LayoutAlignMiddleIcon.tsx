import React from "react";

export const LayoutAlignMiddleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57873)">
<path d="M13 5C13.7956 5 14.5587 5.31607 15.1213 5.87868C15.6839 6.44129 16 7.20435 16 8V11H20C20.2652 11 20.5196 11.1054 20.7071 11.2929C20.8946 11.4804 21 11.7348 21 12C21 12.2652 20.8946 12.5196 20.7071 12.7071C20.5196 12.8946 20.2652 13 20 13H16V16C16 16.7956 15.6839 17.5587 15.1213 18.1213C14.5587 18.6839 13.7956 19 13 19H11C10.2044 19 9.44129 18.6839 8.87868 18.1213C8.31607 17.5587 8 16.7956 8 16V13H4C3.73478 13 3.48043 12.8946 3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929C3.48043 11.1054 3.73478 11 4 11H8V8C8 7.20435 8.31607 6.44129 8.87868 5.87868C9.44129 5.31607 10.2044 5 11 5H13Z" />
</g>
<defs>
<clipPath id="clip0_802_57873">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
