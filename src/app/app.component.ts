import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavFooterComponent } from "./core/components/nav-footer/nav-footer.component";
import { NavHeaderComponent } from "./core/components/nav-header/nav-header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavFooterComponent, NavHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'maine';
}
