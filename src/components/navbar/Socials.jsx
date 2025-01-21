import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

function MobileSocials() {
  return (
    <div className="flex items-center">
      <a
        href="https://www.linkedin.com/in/nils-wenzel-6b7307240/"
        target='_blank'
        rel='noreferrer'
        className="ml-3"
      >
        <FaLinkedin />
      </a>
      <a 
        href="https://github.com/nilswenzel/"
        target='_blank'
        rel='noreferrer'
        className="ml-3">
        <FaGithub />
      </a>
      <a 
        href="mailto:nils.wenzel01@gmail.com"
        className="ml-3">
        <HiOutlineMail />
      </a>
    </div>
  );
}

export default MobileSocials;