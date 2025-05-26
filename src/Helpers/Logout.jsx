export function Logout () {
    localStorage.removeItem('sb-nggzvtkbaoxtucfcgjfm-auth-token');
    window.location.href = '/login'
  }
  