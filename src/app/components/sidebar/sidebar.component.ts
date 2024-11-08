import { Component } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faEnvelope, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  // constructor(library: FaIconLibrary) {
  //   // Add an icon to the library for convenient access in other components
  //   library.addIcons(faCo);
  // }
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab);
  }

  faCoffee = faEnvelopeOpenText;
}
