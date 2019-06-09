import { Component, OnInit } from '@angular/core';

import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'dc-dream-create',
  templateUrl: './dream-create.component.html',
  styleUrls: ['./dream-create.component.scss']
})
export class DreamCreateComponent implements OnInit {

  public dreamForm: FormGroup;
  public readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  public removable = true;
  public addOnBlur = true;
  public tags = [];
  public amountMood: number = 0;

  public constructor(public fb: FormBuilder) { }

  public ngOnInit() {
    this.formBuild();
  }

  public formBuild() {
    this.dreamForm = this.fb.group({
      'title': [''],
      'date': [''],
      'description': [''],
      'tags': [''],
      'mood': [''],
      'conscious': [''],
      'nightmare': ['']
    });
  }

  public addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our tag
    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  public removeTag(tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  public changeMood(event) {
    this.dreamForm.get('mood').setValue(event.value);
    this.amountMood = event.value;
  }

}
