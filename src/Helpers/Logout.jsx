export function Logout () {
    const storageKey = `sb-${import.meta.env.VITE_SUPABASE_PROJECT_ID}-auth-token`;
    localStorage.removeItem(storageKey);
    window.location.href = '/login'
  }
  