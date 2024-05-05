import { useSession } from '@/modules/auth/useSession/useSession';

export default defineNuxtRouteMiddleware((to, from) => {
  const session = useSession();
  const isLogged = session.isLogged();

  if (!isLogged) {
    console.log('* User not authenticated');

    if (to.path === '/login') {
      return;
    }

    return navigateTo('/login');
  }
});
