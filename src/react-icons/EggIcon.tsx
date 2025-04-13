import React from "react";

export const EggIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58196)">
<path d="M12.002 2.00001C7.829 1.99201 4 8.05801 4 14.083C4 18.791 7.25 22 12 22C16.727 21.794 20 18.672 20 14.083C20 8.06301 16.175 2.00801 12.002 2.00001Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58196">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
