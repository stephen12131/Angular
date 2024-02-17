import { Compiler, Injectable, Injector ,Inject, NgModuleFactory, Type, NgModuleRef, createNgModule} from "@angular/core";
import { DynamicComponentManifest } from "./dynamicComponentManifest";
import { DYNAMIC_COMPONENT, DYNAMIC_COMPONENT_MANIFESTS } from "./dynamicloader.static.service";

@Injectable()
export class DynamicComponentLoader {

    constructor(private compiler: Compiler, private injector: Injector,
        @Inject(DYNAMIC_COMPONENT_MANIFESTS) private manifests: DynamicComponentManifest[]) {}


//     loadModule(path: any): Promise<any> {
//         // debugger;
//         const obj = this;
//         return (path() as Promise<NgModuleFactory<any> | Type<any>>)
//             .then(elementModuleOrFactory => {
//                 if (elementModuleOrFactory instanceof NgModuleFactory) {
//                     return elementModuleOrFactory;
//                 } else {
//                     try {
//                         // if Ivy
//                         return obj.compiler.compileModuleAsync(elementModuleOrFactory);
//                     } catch (err) {
//                         throw err;
//                     }
//                 }
//             });
//     }

// //     async loadModule(path: string): Promise<NgModule> {
// //   const module = await import(path);
// //   const moduleInstance = module.default || module;
// //   return moduleInstance;
// // }

//     getComponentFactory(componentId: any): Promise<any> {
//         let manifest:any;
//          manifest = this.manifests
//         .find(m => m.componentId === componentId);
//         const p = this.loadModule(manifest.loadChildren)
//         .then(moduleFactory => {
//                     try {
//                       const elementModuleRef = moduleFactory.create(this.injector);
//                       const moduleInstance = elementModuleRef.instance;
//                       const formType = elementModuleRef.injector.get(DYNAMIC_COMPONENT);

//                      // const formCompFactory = elementModuleRef.componentFactoryResolver.resolveComponentFactory(formType);
//                       return elementModuleRef.componentFactoryResolver.resolveComponentFactory(formType);
//                       // do something with the module...
//                     } catch (err) {
//                       throw err;
//                     }
//                   });
//                   return p;
//     }
    async getComponentFactory(componentId: any): Promise<any> {
     let manifest:any;
     try {
         manifest = this.manifests
        .find(m => m.componentId === componentId);
        const module = await manifest.loadChildren();
        const p = this.loadModule(module).then((elementModuleRef:any)=>{
          
                const formType = elementModuleRef.injector.get(DYNAMIC_COMPONENT);
                return elementModuleRef.componentFactoryResolver.resolveComponentFactory(formType);              
          
        });
        return p;
    } catch (error) {
        console.log(error);
        throw error;
    }
        
}

 async loadModule(module: Type<any>) {
    let ref;
    try {      
        const moduleRef = createNgModule(module, this.injector);    
        return moduleRef;
    } catch (e) {
        console.error(e);
    }
    return ref;
}
}