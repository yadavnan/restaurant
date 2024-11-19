import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

document.addEventListener('DOMContentLoaded', () => {
  const tabs = {
    home: loadHome,
    menu: loadMenu,
    contact: loadContact,
  };

  document.getElementById('home-tab').addEventListener('click', tabs.home);
  document.getElementById('menu-tab').addEventListener('click', tabs.menu);
  document.getElementById('contact-tab').addEventListener('click', tabs.contact);

  loadHome(); // Default tab
});
