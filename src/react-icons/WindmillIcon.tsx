import React from "react";

export const WindmillIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57051)">
<path d="M12 2C15.292 2 18 4.435 18 7.5C18 8.837 17.485 10.054 16.631 11H21C21.2652 11 21.5196 11.1054 21.7071 11.2929C21.8946 11.4804 22 11.7348 22 12C22 15.292 19.565 18 16.5 18C15.164 18 13.947 17.485 13 16.632V21C13 21.2652 12.8946 21.5196 12.7071 21.7071C12.5196 21.8946 12.2652 22 12 22C8.708 22 6 19.565 6 16.5C6 15.164 6.515 13.947 7.368 13H3C2.73478 13 2.48043 12.8946 2.29289 12.7071C2.10536 12.5196 2 12.2652 2 12C2 8.708 4.435 6 7.5 6C8.837 6 10.054 6.515 11 7.369V3C11 2.73478 11.1054 2.48043 11.2929 2.29289C11.4804 2.10536 11.7348 2 12 2Z" />
</g>
<defs>
<clipPath id="clip0_802_57051">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
