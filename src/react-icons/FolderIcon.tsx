import React from "react";

export const FolderIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58164)">
<path d="M9 3C9.2198 2.99998 9.43348 3.07238 9.608 3.206L9.708 3.293L12.414 6H19C19.7652 5.99996 20.5015 6.29233 21.0583 6.81728C21.615 7.34224 21.9501 8.06011 21.995 8.824L22 9V17C22 17.7652 21.7077 18.5015 21.1827 19.0583C20.6578 19.615 19.9399 19.9501 19.176 19.995L19 20H5C4.23479 20 3.49849 19.7077 2.94174 19.1827C2.38499 18.6578 2.04989 17.9399 2.005 17.176L2 17V6C1.99996 5.23479 2.29233 4.49849 2.81728 3.94174C3.34224 3.38499 4.06011 3.04989 4.824 3.005L5 3H9Z" />
</g>
<defs>
<clipPath id="clip0_802_58164">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
