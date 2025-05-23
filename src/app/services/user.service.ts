// UserService provides CRUD operations for User objects and manages user data in memory.
// It uses Angular's dependency injection system and HttpClient for API requests.

import { Injectable } from '@angular/core'; // Angular decorator for injectable services
import { User } from '../models/user.model'; // User model definition
import { HttpClient } from '@angular/common/http'; // Angular HTTP client for API calls
import { map, Observable } from 'rxjs'; // RxJS operators and Observable type

// API endpoint for fetching users
const API_URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root', // Makes the service available application-wide
})
export class UserService {
  private _users: User[] = []; // Internal array to store User objects

  // Injects HttpClient for making HTTP requests
  constructor(private http: HttpClient) {}

  /**
   * Fetches users from the API and maps them to User instances.
   * @returns Observable<User[]> - Emits the array of User objects
   */
  fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>(API_URL).pipe(
      map((rawUsers) => {
        // Maps raw user data to User instances and stores them
        this._users = rawUsers.map((user) => new User(user));
        return this._users;
      })
    );
  }

  /**
   * Returns the current list of users stored in memory.
   * @returns User[]
   */
  getUsers(): User[] {
    return this._users;
  }

  /**
   * Adds a new user to the internal user list.
   * @param newUser Partial<User> - The user data to add
   */
  addUser(newUser: Partial<User>): void {
    // Generates a new unique user ID
    const userId = Math.max(0, ...this._users.map((user) => user.id)) + 1;
    // Creates a new User instance and adds it to the list
    const userInstance = new User({
      ...newUser,
      id: userId,
    });
    this._users.push(userInstance);
  }

  /**
   * Deletes a user by their ID.
   * @param userId number - The ID of the user to delete
   */
  deleteUser(userId: number): void {
    this._users = this._users.filter((user) => user.id !== userId);
  }

  /**
   * Finds a user by their ID.
   * @param userId number - The ID of the user to find
   * @returns User | undefined - The found user or undefined
   */
  findUserById(userId: number): User | undefined {
    return this._users.find((user) => user.id === userId);
  }

  /**
   * Edits a user's data by their ID.
   * @param userId number - The ID of the user to edit
   * @param updatedUser Partial<User> - The new user data
   * @returns User | undefined - The updated user or throws if not found
   */
  editUserById(userId: number, updatedUser: Partial<User>): User | undefined {
    const user = this.findUserById(userId);
    if (!user) {
      throw new Error(`User with id ${userId} not found.`);
    }
    // Updates the user object with new data
    Object.assign(user, updatedUser);
    return user;
  }
}
