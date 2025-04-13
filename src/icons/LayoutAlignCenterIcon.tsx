import React from "react";

export const LayoutAlignCenterIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57880)">
<path d="M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289C12.8946 3.48043 13 3.73478 13 4V8H16C16.7956 8 17.5587 8.31607 18.1213 8.87868C18.6839 9.44129 19 10.2044 19 11V13C19 13.7956 18.6839 14.5587 18.1213 15.1213C17.5587 15.6839 16.7956 16 16 16H13V20C13 20.2652 12.8946 20.5196 12.7071 20.7071C12.5196 20.8946 12.2652 21 12 21C11.7348 21 11.4804 20.8946 11.2929 20.7071C11.1054 20.5196 11 20.2652 11 20V16H8C7.20435 16 6.44129 15.6839 5.87868 15.1213C5.31607 14.5587 5 13.7956 5 13V11C5 10.2044 5.31607 9.44129 5.87868 8.87868C6.44129 8.31607 7.20435 8 8 8H11V4C11 3.73478 11.1054 3.48043 11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57880">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
