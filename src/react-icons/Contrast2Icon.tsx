import React from "react";

export const Contrast2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58310)">
<path d="M19 2C19.7956 2 20.5587 2.31607 21.1213 2.87868C21.6839 3.44129 22 4.20435 22 5V19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H19ZM19 4H5C4.73478 4 4.48043 4.10536 4.29289 4.29289C4.10536 4.48043 4 4.73478 4 5V19C3.99999 19.2251 4.0759 19.4435 4.21545 19.6201C4.355 19.7967 4.55003 19.921 4.769 19.973C8.268 19.626 11.851 15.846 11.995 12.226L12 12C12 8.313 15.66 4.381 19.232 4.026C19.1559 4.00831 19.0781 3.99958 19 4Z" />
</g>
<defs>
<clipPath id="clip0_802_58310">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
