import restaurantImage from './rstrnt.jpg';

export default function loadHome() {
  const content = document.getElementById('content');
  content.innerHTML = ''; // Clear existing content

  const heading = document.createElement('h1');
  heading.textContent = 'Welcome to vinay Restaurant!';
  
  const description = document.createElement('p');
  description.textContent = 'We serve the best food in town. Visit us for an unforgettable experience!';
  
  const image = document.createElement('img');
  image.src = restaurantImage; // Replace with your image path
  image.alt = 'Restaurant image';

  content.append(heading, description, image);
}
