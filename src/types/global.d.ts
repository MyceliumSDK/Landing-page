import * as constants from '../constants';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $constants: typeof constants;
  }
}

export {};
