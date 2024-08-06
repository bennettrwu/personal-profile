import { Link } from 'react-router-dom';

import './Contact.css';

function Contact() {
  const submitContactForm = () => {
    //
  };

  return (
    <div className='frosted spaced card'>
      <Link className='large-link' to='/' title='Return to profile'>
        <svg
          className='left-icon'
          width='24'
          height='24'
          xmlns='http://www.w3.org/2000/svg'
          fill-rule='evenodd'
          clip-rule='evenodd'
          fill='currentColor'
        >
          <path
            d='m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z'
            fill-rule='nonzero'
          />
        </svg>
        Profile
      </Link>
      <br />
      <h1>Contact</h1>
      <br />
      <form
        onSubmit={(e) => {
          submitContactForm();
          e.preventDefault();
        }}
      >
        <h3>Email</h3>
        <input id='email-field' className='input-field' />
        <h3>Message</h3>
        <textarea id='message-field' className='text-field' />
        <div id='submit-container'>
          <button className='large-button' id='submit-button' type='submit'>
            Send
            <svg
              className='right-icon'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill-rule='evenodd'
              stroke-linejoin='round'
              stroke-miterlimit='2'
              fill='currentColor'
            >
              <path
                d='m2.25 12.321 7.27 6.491c.143.127.321.19.499.19.206 0 .41-.084.559-.249l11.23-12.501c.129-.143.192-.321.192-.5 0-.419-.338-.75-.749-.75-.206 0-.411.084-.559.249l-10.731 11.945-6.711-5.994c-.144-.127-.322-.19-.5-.19-.417 0-.75.336-.75.749 0 .206.084.412.25.56'
                fill-rule='nonzero'
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
