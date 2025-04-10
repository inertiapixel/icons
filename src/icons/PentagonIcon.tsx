import React from "react";

export const PentagonIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_57672)">
<path d="M10.2032 2.59877L3.2432 7.83677C2.74183 8.214 2.37135 8.73894 2.18389 9.33772C1.99644 9.9365 2.00144 10.579 2.1982 11.1748L5.0942 19.9398C5.29221 20.5392 5.67425 21.0609 6.18595 21.4305C6.69765 21.8002 7.31293 21.9991 7.9442 21.9988H16.0642C16.6912 21.9987 17.3025 21.8022 17.8121 21.4368C18.3216 21.0715 18.7039 20.5556 18.9052 19.9618L21.8782 11.1978C22.0818 10.5972 22.0899 9.94748 21.9013 9.342C21.7126 8.73653 21.337 8.20641 20.8282 7.82777L13.7952 2.59077L13.7042 2.52977L13.6862 2.51977L13.5802 2.44977C13.0676 2.13221 12.4713 1.97648 11.8689 2.00288C11.2665 2.02928 10.686 2.23759 10.2032 2.59877Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57672">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
