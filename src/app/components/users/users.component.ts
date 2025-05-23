// UsersComponent: Displays and manages a list of users in the application.
// Imports Angular core and common modules, user service, user model, and child components.
import { Component, OnInit } from '@angular/core';
import { UsercardComponent } from '../usercard/usercard.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

/**
 * UsersComponent is responsible for displaying the list of users and handling user-related actions
 * such as fetching, adding, updating, and deleting users. It uses UserService for data operations.
 */
@Component({
  selector: 'app-users', // Selector for the users component
  imports: [UsercardComponent, CommonModule], // Imports required modules and components
  templateUrl: './users.component.html', // HTML template for the component
  styleUrl: './users.component.scss', // SCSS styles for the component
})
export class UsersComponent implements OnInit {
  /**
   * Constructor injects the UserService for user data operations.
   * @param userService - Service to manage user data
   */
  constructor(public userService: UserService) {}

  /**
   * Lifecycle hook that is called after data-bound properties are initialized.
   * Fetches the list of users from the server.
   */
  ngOnInit() {
    this.userService.fetchUsers().subscribe({
      next: () => {
        console.log('Users  fetched successfully');
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      },
    });
  }

  /**
   * Deletes a user by their ID.
   * @param userId - The ID of the user to delete
   */
  onDeleteUser(userId: number) {
    this.userService.deleteUser(userId);
  }

  /**
   * Adds a new user.
   * @param newUser - Partial user object containing new user data
   */
  onAddUser(newUser: Partial<User>) {
    this.userService.addUser(newUser);
  }

  /**
   * Updates an existing user by their ID.
   * @param updatedUser - The updated user object
   */
  onUpdateUser(updatedUser: User) {
    this.userService.editUserById(updatedUser.id, updatedUser);
  }
}
