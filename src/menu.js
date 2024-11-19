export default function loadMenu() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const heading = document.createElement('h1');
  heading.textContent = 'Our Menu';

  const menuList = document.createElement('ul');
  const items = ['Pizza', 'Pasta', 'Salad'];
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    menuList.appendChild(li);
  });

  content.append(heading, menuList);
}
