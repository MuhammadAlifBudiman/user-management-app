/**
 * Represents a user entity with basic information.
 */
export class User {
  /** Unique identifier for the user */
  id: number = 0;
  /** Full name of the user */
  name: string = '';
  /** Username for login or display */
  username: string = '';
  /** Email address of the user */
  email: string = '';
  /** Contact phone number */
  phone: string = '';
  /** Personal or business website URL */
  website: string = '';

  /**
   * Constructs a new User instance.
   * @param userData Partial user data to initialize the user object.
   */
  constructor(userData: Partial<User>) {
    // Assigns provided userData properties to the instance
    Object.assign(this, userData);
  }
}
