import React from 'react';
import { SocialIcon } from 'react-social-icons';
import v from 'vudu';
import { styles as s } from 'stylesheet';

const LINKEDIN = 'https://www.linkedin.com/company/11272066/';
const INSTAGRAM = 'https://www.instagram.com/lalena_co/';
const TWITTER = 'https://twitter.com/lalena_co';
const GITHUB = 'https://github.com/lalena-co';
const TUMBLR = 'https://lalena-co.tumblr.com/';
const MEDIUM = 'https://medium.com/@lalena_co';

const COLOR = '#22222';

const localClasses = v({
  socialMedia: {
    '@composes': [
      s.flex,
      s.justifyCenter,
    ],
    'a': {
      height: '20px !important',
      width: '20px !important',
      marginLeft: '10px',
      ':first-child': {
        marginLeft: '0',
      }
    }
  },
});

const SocialMedia = () => {
  return (
    <div className={localClasses.socialMedia}>
      <SocialIcon url={LINKEDIN} color={COLOR} />
      <SocialIcon url={INSTAGRAM} color={COLOR} />
      <SocialIcon url={TWITTER} color={COLOR} />
      <SocialIcon url={MEDIUM} color={COLOR} />
      <SocialIcon url={TUMBLR} color={COLOR} network={'tumblr'} />
      <SocialIcon url={GITHUB} color={COLOR} />
    </div>
  );
}

export default SocialMedia;
