import React from "react";

export const CapsuleHorizontalIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58661)">
<path d="M15 5H9C8.08075 5 7.1705 5.18106 6.32122 5.53284C5.47194 5.88463 4.70026 6.40024 4.05025 7.05025C3.40024 7.70026 2.88463 8.47194 2.53284 9.32122C2.18106 10.1705 2 11.0807 2 12C2 12.9193 2.18106 13.8295 2.53284 14.6788C2.88463 15.5281 3.40024 16.2997 4.05025 16.9497C4.70026 17.5998 5.47194 18.1154 6.32122 18.4672C7.1705 18.8189 8.08075 19 9 19H15C16.8565 19 18.637 18.2625 19.9497 16.9497C21.2625 15.637 22 13.8565 22 12L21.993 11.697C21.9149 9.89471 21.144 8.19215 19.8412 6.94441C18.5383 5.69668 16.804 5.00011 15 5Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58661">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
