export default function loadContact() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const heading = document.createElement('h1');
  heading.textContent = 'Contact Us';

  const contactInfo = document.createElement('p');
  contactInfo.textContent = 'Call us at 123-456-7890 or visit us at 123 Food St.';

  content.append(heading, contactInfo);
}
