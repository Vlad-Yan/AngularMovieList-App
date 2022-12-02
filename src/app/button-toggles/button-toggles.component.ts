import { Component } from '@angular/core';

@Component({
  selector: 'app-button-toggles',
  templateUrl: './button-toggles.component.html',
  styleUrls: ['./button-toggles.component.scss']
})
export class ButtonTogglesComponent {

  onToggleChange() {
    console.log('onToggleChange');
  }
}
