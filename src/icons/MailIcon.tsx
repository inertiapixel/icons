import React from "react";

export const MailIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_57760)">
<path d="M22 7.53516V17.0002C22 17.7654 21.7077 18.5017 21.1827 19.0584C20.6578 19.6152 19.9399 19.9503 19.176 19.9952L19 20.0002H5C4.23479 20.0002 3.49849 19.7078 2.94174 19.1829C2.38499 18.6579 2.04989 17.9401 2.005 17.1762L2 17.0002V7.53516L11.445 13.8322L11.561 13.8982C11.6977 13.965 11.8478 13.9997 12 13.9997C12.1522 13.9997 12.3023 13.965 12.439 13.8982L12.555 13.8322L22 7.53516Z" fill="black"/>
<path d="M19.0003 4C20.0803 4 21.0273 4.57 21.5553 5.427L12.0003 11.797L2.44531 5.427C2.69604 5.01977 3.04053 4.6784 3.45002 4.43138C3.85951 4.18436 4.32214 4.03886 4.79931 4.007L5.00031 4H19.0003Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57760">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
