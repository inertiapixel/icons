import React from "react";

export const BrandVintedIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81267)">
<path d="M11.028 6.00008C11.028 13.6951 10.736 17.7281 11.028 18.0001C13.074 13.0001 15.274 5.35808 16.28 3.90108C16.623 3.40408 17.048 2.97108 17.537 2.62408C18.14 2.23408 18.829 1.86408 19 2.04908C18.93 4.36808 14.977 17.8711 14.791 18.3631C14.4735 19.1331 14.0026 19.8305 13.4068 20.4126C12.8111 20.9947 12.1031 21.4495 11.326 21.7491C8.11296 22.5291 7.89696 21.3031 7.48996 20.6151C6.53996 18.5121 5.80796 6.35508 6.04496 5.00008C6.09496 4.47708 6.18796 3.14908 8.53596 3.00008C10.895 2.64608 11.083 4.40408 11.028 6.00008Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81267">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
