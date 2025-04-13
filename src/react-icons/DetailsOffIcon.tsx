import React from "react";

export const DetailsOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_76849)">
<path d="M5 19H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.9852 16.9845C20.9832 16.7328 20.9336 16.4838 20.8392 16.2505L13.7392 4.0005C13.5663 3.6879 13.3127 3.42733 13.005 3.24589C12.6972 3.06445 12.3465 2.96875 11.9892 2.96875C11.632 2.96875 11.2812 3.06445 10.9735 3.24589C10.6657 3.42733 10.4122 3.6879 10.2392 4.0005L9.41821 5.4175M7.94921 7.9515L3.13921 16.2505C3.01915 16.5461 2.97155 16.8661 3.00036 17.1838C3.02918 17.5015 3.13359 17.8078 3.30486 18.0769C3.47614 18.3461 3.70932 18.5703 3.98494 18.731C4.26056 18.8917 4.57061 18.9841 4.88921 19.0005"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 3V8M12 12V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_76849">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
