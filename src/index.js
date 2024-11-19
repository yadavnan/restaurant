import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // Object mapping tabs to their respective functions
  const tabs = {
    home: loadHome,
    menu: loadMenu,
    contact: loadContact,
  };

  // Add event listeners to all tab buttons
  document.querySelectorAll('nav button').forEach((button) => {
    button.addEventListener('click', () => {
      // Remove 'active' class from all buttons
      document.querySelectorAll('nav button').forEach((btn) => btn.classList.remove('active'));

      // Add 'active' class to the clicked button
      button.classList.add('active');

      // Clear content and load the selected tab's content
      const tabId = button.id.replace('-tab', ''); // e.g., 'home-tab' -> 'home'
      tabs[tabId](); // Call the corresponding function from the tabs object
    });
  });

  // Load the default tab (Home)
  document.getElementById('home-tab').classList.add('active'); // Set Home button as active by default
  loadHome(); // Load Home tab content by default
});
