import ISocial from '../models/Social';
import { UilLinkedin, UilGithub, UilFacebook } from '@iconscout/react-unicons';

const socialMedia: ISocial[] = [
  {
    username: 'ordan-gramatov',
    url: 'https://www.linkedin.com/in/ordan-gramatov',
    Icon: UilLinkedin,
  },
  {
    username: 'ordance0208',
    url: 'https://github.com/ordance0208',
    Icon: UilGithub,
  },
  {
    username: 'ordancheg',
    url: 'https://www.facebook.com/ordancheg',
    Icon: UilFacebook,
  },
];

export default socialMedia;
