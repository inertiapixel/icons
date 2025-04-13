import React from "react";

export const CubePlusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77495)">
<path d="M21 12.4995V7.9905C20.9994 7.64157 20.9066 7.299 20.731 6.99748C20.5554 6.69596 20.3032 6.4462 20 6.2735L13 2.2655C12.6954 2.09151 12.3508 2 12 2C11.6492 2 11.3046 2.09151 11 2.2655L4 6.2725C3.381 6.6275 3 7.2825 3 7.9905V16.0085C3 16.7175 3.381 17.3715 4 17.7255L11 21.7335C11.3046 21.9075 11.6492 21.999 12 21.999C12.3508 21.999 12.6954 21.9075 13 21.7335"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12.0009L20.73 6.96094"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.26953 6.96094L11.9995 12.0009"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77495">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
