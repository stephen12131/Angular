import { ROUTES } from "@angular/router";
import { DynamicComponentManifest } from "./dynamicComponentManifest";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { DYNAMIC_COMPONENT_MANIFESTS } from "./dynamicloader.static.service";
import { DynamicComponentLoader } from "./DynamicComponentLoader.service";

@NgModule({
    providers: [
     
    ],
  })
  export class DynamicComponentLoaderModule {
    static forRoot(manifests: DynamicComponentManifest[]): ModuleWithProviders<any> {
      return {
        ngModule: DynamicComponentLoaderModule,
        providers: [
          { provide: ROUTES, useValue: manifests, multi: true },
          { provide: DYNAMIC_COMPONENT_MANIFESTS, useValue: manifests },
        ],
      };
    }
  }