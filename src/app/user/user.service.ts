import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subscription, tap} from "rxjs";
import {User} from "../types/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {

  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: User | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }

  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user) => { this.user = user });
  }

  login(email: String, password: String) {
    return this.http
      .post<User>('/api/login', {email, password})
      .pipe(tap((user) => this.user$$.next(user)))
  }

  register(
    username: string,
    email: string,
    password: string,
    rePassword: string,
    tel: string
  ) {
    return this.http
      .post<User>('/api/register', {
        username,
        email,
        password,
        rePassword,
        tel,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http
      .post<User>('/api/logout', {})
      .pipe(tap(() => this.user$$.next(undefined)));
  }

  getProfile() {
    return this.http
      .get<User>('/api/users/profile')
      .pipe(tap((user) => this.user$$.next(user)));
  }

  updateProfile(username: string, email: string, tel?: string) {
    return this.http
      .put<User>('/api/users/profile', { username, email, tel })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    const getSum = (a: number, b: number) => { return a + b; };
  }
}
