// Angular common module for common directives
import { CommonModule } from '@angular/common';
// Angular core module for component and input decorators
import { Component, Input } from '@angular/core';
// Angular forms module for template-driven forms
import { FormsModule } from '@angular/forms';
// User model interface/class
import { User } from '../../models/user.model';
// Service for user-related operations
import { UserService } from '../../services/user.service';

/**
 * UsercardComponent displays user information and provides edit/delete functionality.
 *
 * @selector app-usercard
 * @imports CommonModule, FormsModule
 * @template ./usercard.component.html
 * @style ./usercard.component.scss
 */
@Component({
  selector: 'app-usercard', // Component selector for usage in templates
  imports: [CommonModule, FormsModule], // Required Angular modules
  templateUrl: './usercard.component.html', // HTML template path
  styleUrl: './usercard.component.scss', // SCSS style path
})
export class UsercardComponent {
  /**
   * User object to display and edit, passed from parent component
   */
  @Input() user!: User;

  /**
   * Controls visibility of the edit modal dialog
   */
  isEditModalOpen: boolean = false;

  /**
   * Holds a copy of the user object for editing
   */
  editUser: User = new User({ ...this.user });

  /**
   * Injects the UserService for user operations
   * @param userService Service for user CRUD operations
   */
  constructor(private userService: UserService) {}

  /**
   * Opens the edit modal and copies user data for editing
   */
  onEdit() {
    this.editUser = new User({ ...this.user });
    this.isEditModalOpen = true;
  }

  /**
   * Closes the edit modal dialog
   */
  closeModal() {
    this.isEditModalOpen = false;
  }

  /**
   * Saves changes to the user by calling the service and closes the modal
   */
  saveChanges() {
    this.userService.editUserById(this.user.id, this.editUser);
    this.isEditModalOpen = false;
  }

  /**
   * Deletes the user by calling the service
   */
  onDelete() {
    this.userService.deleteUser(this.user.id);
  }
}
