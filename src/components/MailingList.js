import React from 'react';
import v from 'vudu';
import { colors } from 'stylesheet';
import Text from 'components/Text';

const ACTION = '//lalena.us16.list-manage.com/subscribe/post?u=986a1b2f4907ab6bff4c00356&amp;id=3ed96ea90a';

const localClasses = v({
  mailingList: {
    marginBottom: '25px',
    textAlign: 'center',
    'input': {
      borderRadius: '0px',
      backgroundColor: 'none',
      border: '0',
      borderBottom: `1px solid ${colors.black}`,
      color: colors.black,
      marginRight: '5px',
      padding: '5px 10px',
      fontSize: '11px',
      width: '200px',
    },
    'p': {
      fontSize: '10px',
    },
    button: {
      backgroundColor: 'transparent',
      color: colors.black,
      border: '0',
      borderRadius: '0',
      cursor: 'pointer',
      fontSize: '14px',
      textTransform: 'uppercase',
      borderBottom: '2px solid transparent',
      ':hover': {
        borderBottom: `2px solid ${colors.black}`,
      },
    },
  },
  headline: {
    marginBottom: '10px',
  },
});

const ID = 'mailing-list-email-address';

const MailingList = () => (
  <div className={localClasses.mailingList}>
    <Text classes={localClasses.headline} variant='h3'>{'Join Our Mailing List'}</Text>
    <form action={ACTION} target="_blank" noValidate method={'post'}>
      <input type={'email'} id={ID} name={'EMAIL'} placeholder={'Enter Your Email Address'} />
      <button type={'submit'}>{'Subscribe'}</button>
    </form>
  </div>
);

export default MailingList;
