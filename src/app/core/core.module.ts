import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [
    SharedModule
  ],
  declarations: []
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule:CoreModule){
    if (parentModule) {
      throw new Error('已经装载，请在appmodule中引入')
    }
  }
}
