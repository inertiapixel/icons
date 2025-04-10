import React from "react";

export const AlertTriangleOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_86046)">
<path d="M21.9975 17.9962C21.9838 17.6893 21.8963 17.3902 21.7425 17.1242L13.6365 3.59019C13.466 3.30869 13.2257 3.07593 12.9389 2.91439C12.6522 2.75284 12.3286 2.66797 11.9995 2.66797C11.6704 2.66797 11.3468 2.75284 11.06 2.91439C10.7733 3.07593 10.533 3.30869 10.3625 3.59019L9.3225 5.32619M7.8295 7.81919L2.2565 17.1232C2.08939 17.4126 2.00096 17.7407 2.00001 18.0748C1.99905 18.409 2.0856 18.7376 2.25104 19.0279C2.41649 19.3183 2.65506 19.5602 2.94304 19.7297C3.23101 19.8993 3.55835 19.9904 3.8925 19.9942H19.9995" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16H12.01" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V8" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_86046">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
