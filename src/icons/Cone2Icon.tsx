import React from "react";

export const Cone2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_58316)">
<path d="M12 1C17.52 1 22 2.494 22 5.002V5.502C22 5.6686 21.9584 5.83256 21.879 5.979L13.74 20.985C13.5648 21.2942 13.3104 21.5511 13.003 21.7293C12.6955 21.9075 12.3462 22.0005 11.9908 21.9989C11.6355 21.9973 11.287 21.901 10.9812 21.72C10.6754 21.539 10.4234 21.2797 10.251 20.969L2.121 5.979C2.04189 5.83316 2.0003 5.66992 2 5.504V5.004C2 2.495 6.48 1 12 1Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58316">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
