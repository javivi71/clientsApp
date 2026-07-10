import { Injectable } from '@angular/core';
import { supabase } from '../config/supabase';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  async login(email: string, password: string) {
    return await supabase.auth.signInWithPassword({
      email,
      password,
    });
  } // Fin de login

  async logout() {
    await supabase.auth.signOut();
  }

  async isAuthenticated() {
    const { data } = await supabase.auth.getSession();
    return !!data.session;
  }

} // fin clase Auth
