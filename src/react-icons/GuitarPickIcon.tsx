import React from "react";

export const GuitarPickIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58119)">
<path d="M12 2C10.387 2 9.118 2.104 8.175 2.323L7.945 2.38C4.926 3.088 3 4.883 3 8C3 11.367 4.939 16.274 7.22 19.125C7.54 19.525 7.884 19.911 8.25 20.283L8.617 20.643C9.52683 21.5094 10.7345 21.9935 11.9908 21.9956C13.2471 21.9976 14.4564 21.5174 15.369 20.654C15.8737 20.1778 16.3448 19.6672 16.779 19.126C19.27 16.013 21 11.832 21 8C21 4.975 19.187 3.194 16.29 2.438L16.024 2.372C15.088 2.122 13.743 2 12 2Z" />
</g>
<defs>
<clipPath id="clip0_802_58119">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
