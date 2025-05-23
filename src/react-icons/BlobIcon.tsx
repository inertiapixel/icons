import React from "react";

export const BlobIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58913)">
<path d="M12 3C14.78 3 17.349 4.556 19.243 7.083C20.97 9.388 22 12.34 22 15.098C22 16.568 21.707 17.815 21.097 18.843C20.495 19.857 19.618 20.601 18.515 21.099C16.922 21.818 15.182 22 12 22C8.818 22 7.078 21.818 5.485 21.1C4.382 20.601 3.505 19.857 2.903 18.843C2.293 17.815 2 16.569 2 15.098C2 12.34 3.03 9.388 4.757 7.083C6.651 4.556 9.22 3 12 3Z" />
</g>
<defs>
<clipPath id="clip0_802_58913">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
