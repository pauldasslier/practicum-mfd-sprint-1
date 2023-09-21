import { NotFound } from './pages/NotFound';
import { Profile } from './pages/Profile';
import { Main } from './pages/Main';

const ROUTES: Record<string, string> = {
  '/not-fount': NotFound(),
  '/profile': Profile(),
  '/': Main(),
}


window.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');

  if (root) {
    const component = ROUTES[window.location.pathname] || NotFound();
    root.innerHTML = component;
  }
});