export function useSession() {
  const user = useSupabaseUser();

  const isLogged = () => {
    const hasUserLogged = Boolean(user.value);
    return hasUserLogged;
  };

  return {
    user,
    isLogged,
  };
}
