import Container from '../../components/Container';
import ContactDetails from './components/ContactDetails';
import ContactEmail from './components/ContactEmail';

const Contact = () => {
  return (
    <section
      id='contact'
      className='bg-light dark:bg-bg-dark relative py-[64px]'
    >
      <Container className='m-auto flex flex-col h-full pt-5' title='Contact'>
        <div className='flex flex-col gap-10 lg:gap-0 lg:flex-row'>
          <ContactDetails />
          <ContactEmail />
        </div>
      </Container>
    </section>
  );
};

export default Contact;
