import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JenisSampahPage } from './jenis-sampah';

@NgModule({
  declarations: [
    JenisSampahPage,
  ],
  imports: [
    IonicPageModule.forChild(JenisSampahPage),
  ],
})
export class JenisSampahPageModule {}
