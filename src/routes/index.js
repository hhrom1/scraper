import Header from '../templates/Header';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Error404 from '../pages/Error404';

// Utils
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/': Home,
  '/:id': Details,
  '/contact': 'Contact',
};

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');
  const deatils = null || document.getElementById('details');
  header.innerHTML = await Header();
  //content.innerHTML = await Character();

  
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;

  content.innerHTML =  await render();
};

export default router;