import React from "react";

export const CrownOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77566)">
<path d="M17.9985 18H4.99846L3.13346 8.673C3.12377 8.62294 3.12962 8.57112 3.15022 8.52449C3.17082 8.47785 3.20519 8.43863 3.24872 8.41208C3.29224 8.38553 3.34284 8.37292 3.39374 8.37594C3.44463 8.37897 3.49339 8.39748 3.53346 8.429L7.99846 12L9.59846 9.6M11.1945 7.206L11.9985 6L15.9985 12L20.4625 8.429C20.5025 8.39711 20.5514 8.37828 20.6025 8.37506C20.6536 8.37184 20.7044 8.38439 20.7481 8.411C20.7919 8.43761 20.8264 8.477 20.847 8.52386C20.8676 8.57072 20.8734 8.62278 20.8635 8.673L19.5005 15.491"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77566">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
