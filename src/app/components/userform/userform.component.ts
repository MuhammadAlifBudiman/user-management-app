// userform.component.ts - Angular component for user form
// Import Angular common module for common directives
import { CommonModule } from '@angular/common';
// Import Component decorator for defining Angular components
import { Component } from '@angular/core';
// Import FormsModule and NgForm for template-driven forms
import { FormsModule, NgForm } from '@angular/forms';
// Import User model interface
import { User } from '../../models/user.model';
// Import UserService for user-related operations
import { UserService } from '../../services/user.service';

/**
 * UserformComponent
 * Angular component for creating a new user via a form.
 * Handles form submission and user creation logic.
 */
@Component({
  selector: 'app-userform', // Selector for using this component in templates
  imports: [CommonModule, FormsModule], // Import required Angular modules
  templateUrl: './userform.component.html', // Path to component template
  styleUrl: './userform.component.scss', // Path to component styles
})
export class UserformComponent {
  /**
   * newUser: Holds the data for the new user being created.
   * Partial<User> allows for incomplete user objects during form entry.
   */
  newUser: Partial<User> = {};

  /**
   * Injects the UserService for user management operations.
   * @param userService - Service for managing users
   */
  constructor(private userService: UserService) {}

  /**
   * Handles form submission event.
   * Adds the new user using UserService, resets the form and clears newUser.
   * @param userForm - Reference to the submitted NgForm
   */
  onSubmit(userForm: NgForm) {
    this.userService.addUser(this.newUser);
    this.newUser = {};
    userForm.resetForm();
  }
}
