import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiNoButtonsGroupComponent } from './si-no-buttons-group.component';
import { KeyboardManagerModule } from '../../directives/keyboard-manager/keyboard-manager.module';

@NgModule({
  declarations: [SiNoButtonsGroupComponent],
  imports: [CommonModule, KeyboardManagerModule],
  exports: [SiNoButtonsGroupComponent],
})
export class SiNoButtonsGroupModule {}
