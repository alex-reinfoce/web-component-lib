interface WebButtonProps {
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'web-button': WebButtonProps;
    }
  }
}

// @ts-ignore
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    'web-button': WebButtonProps;
  }
}
