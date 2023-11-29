import ISocial from '../../models/Social';
import socialMedia from '../../utils/socialMedia';

const SocialLinks = () => {
  return (
    <div className='flex gap-2'>
      {socialMedia.map(({ username, url, Icon }: ISocial) => (
        <a key={username} href={url} target='_blank' rel='noopener noreferrer'>
          <Icon className='text-accent' size={42} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
