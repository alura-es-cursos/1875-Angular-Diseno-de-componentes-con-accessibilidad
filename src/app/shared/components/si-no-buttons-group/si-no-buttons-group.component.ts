import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { UniqueIdService } from '../../service/unique-id.service';
@Component({
  selector: 'app-si-no-buttons-group',
  templateUrl: './si-no-buttons-group.component.html',
  styleUrls: ['./si-no-buttons-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SiNoButtonsGroupComponent),
    },
  ],
})
export class SiNoButtonsGroupComponent implements OnInit, ControlValueAccessor {
  @Input() value = '';
  @Input() label = '';

  @Output() valueChange = new EventEmitter<string>();

  options = SiNoButtonGroupOptions;

  id = '';

  onChange = (value: string): void => {};
  onTouched = () => {};

  constructor(private uniqueIdService: UniqueIdService) {
    this.id = this.uniqueIdService.generateUniqueIdWithPrefix(
      'si-no-buttons-group'
    );
  }

  ngOnInit(): void {}

  writeValue(value: string): void {
    this.value = value;
    this.onChange(value);
    this.valueChange.emit(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  activate(value: string): void {
    this.writeValue(value);
  }
}

enum SiNoButtonGroupOptions {
  SI = 'si',
  NO = 'no',
}
