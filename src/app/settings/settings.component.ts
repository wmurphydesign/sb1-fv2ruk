import { Component } from '@angular/core';

@Component({
  selector: 'ns-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  colorSchemes = ['Blue', 'Red', 'Green', 'Purple', 'Orange'];
  selectedColorScheme = 'Blue';

  onChangeColorScheme() {
    // Implement color scheme change logic
    console.log('Color scheme changed to:', this.selectedColorScheme);
  }

  onUpgrade() {
    // Implement upgrade logic
    console.log('Upgrade tapped');
  }

  onSupportFeedback() {
    // Implement support/feedback logic
    console.log('Support/Feedback tapped');
  }
}