// Import Angular core Component decorator
import { Component } from '@angular/core';
// Import UsersComponent for displaying user list
import { UsersComponent } from './components/users/users.component';
// Import UserformComponent for user form functionality
import { UserformComponent } from './components/userform/userform.component';

/**
 * Root component of the application.
 *
 * @selector app-root - The selector used in index.html to render this component.
 * @imports [UsersComponent, UserformComponent] - Child components used in this root component.
 * @templateUrl './app.component.html' - The HTML template for this component.
 * @styleUrl './app.component.scss' - The SCSS stylesheet for this component.
 */
@Component({
  selector: 'app-root', // Root selector for the app
  imports: [UsersComponent, UserformComponent], // Importing child components
  templateUrl: './app.component.html', // Path to the component's HTML template
  styleUrl: './app.component.scss', // Path to the component's SCSS file
})
// Main AppComponent class
export class AppComponent {}
