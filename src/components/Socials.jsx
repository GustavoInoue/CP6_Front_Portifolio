import { GitHub, LinkedIn, Mail } from './Icons';
import { contact } from '../data/projects';

export default function Socials({ className = '' }) {
  return (
    <ul className={`socials ${className}`}>
      <li><a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHub /></a></li>
      <li><a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedIn /></a></li>
      <li><a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer" aria-label="Abrir o Gmail"><Mail /></a></li>
    </ul>
  );
}
