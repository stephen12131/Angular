export interface DynamicComponentManifest {
    componentId: string;
    path: string;
    loadChildren(): any;
  }