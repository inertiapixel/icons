import React from "react";

export const SliceIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63550)">
<path d="M3 19L18 4L21 7L15 13L17 15C15.2577 16.8866 13.0301 18.2577 10.5609 18.9632C8.09168 19.6687 5.47598 19.6814 3 19Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63550">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
