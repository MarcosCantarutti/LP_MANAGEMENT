import { useSession } from '@/modules/auth/useSession/useSession';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const session = useSession();
  const isLogged = await session.isLogged();

  if (!isLogged) {
    console.log('* User not authenticated');

    if (to.path === '/login') {
      return;
    }

    return navigateTo('/login');
  }
});
