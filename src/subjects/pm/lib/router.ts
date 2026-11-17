// Router shim so the Project Management views can live inside the unified router.
import { useLocation, useNavigate } from 'react-router-dom';

const BASE = '/pm';

const stripBase = (pathname: string): string => pathname.replace(/^\/pm\/?/, '');

export function useRouter() {
  const location = useLocation();
  const navigateTo = useNavigate();
  const route = stripBase(location.pathname) || 'home';

  const navigate = (newRoute: string) => {
    const clean = newRoute.replace(/^\//, '');
    navigateTo(clean && clean !== 'home' ? `${BASE}/${clean}` : BASE);
  };

  return { route, navigate };
}

export function getRouteParams(route: string) {
  const parts = route.split('/');
  return {
    view: parts[0],
    id: parts[1],
    subId: parts[2]
  };
}
