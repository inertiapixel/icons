import React from "react";

export const CircleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58399)">
<path d="M7 3.33962C8.89444 2.24593 11.0952 1.8036 13.2651 2.0804C15.435 2.35719 17.4543 3.33786 19.0135 4.87211C20.5727 6.40635 21.5859 8.40954 21.8977 10.5747C22.2095 12.7398 21.8027 14.9475 20.7397 16.8593C19.6768 18.7712 18.0162 20.2818 16.0126 21.1596C14.009 22.0374 11.7728 22.234 9.64672 21.7192C7.52066 21.2045 5.62203 20.0069 4.24177 18.3098C2.86152 16.6128 2.07579 14.51 2.005 12.3236L2 11.9996L2.005 11.6756C2.06016 9.97608 2.5478 8.31868 3.42181 6.86007C4.29583 5.40145 5.52736 4.18979 7 3.33962Z" />
</g>
<defs>
<clipPath id="clip0_802_58399">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
