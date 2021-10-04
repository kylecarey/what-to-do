import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private formData: FormGroup;

  constructor() {}

  ngOnInit() {
    this.formData = new FormGroup({
      title: new FormControl(),
      description: new FormControl()
    })
  }

  onSubmit() {
    console.log(this.formData.value);
  }
}
