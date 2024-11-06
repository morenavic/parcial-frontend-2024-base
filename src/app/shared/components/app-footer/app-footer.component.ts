import {Component} from '@angular/core';
import {LayoutService} from "../../services/app.layout.service";

@Component({
  selector: 'shared-footer',
  standalone: true,
  imports: [],
  templateUrl: './app-footer.component.html',
  styles: ``
})
export class AppFooterComponent {
  constructor(public layoutService: LayoutService) {
  }
}
