import React from 'react';
import { Helmet } from 'react-helmet';

const SITE = 'Lalena - Membership';

const Head = (props) => {
  const {
    page,
    title,
  } = props;

  const fullTitle = () => {
    let fullTitle = title;
    if (page.length) fullTitle = `${fullTitle} | ${page}`;
    return fullTitle;
  }

  return (
    <Helmet
      meta={[
        { name: 'author', content: SITE },
        { name: 'twitter:site', content: SITE },
        { name: 'twitter:title', content: page },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: page },
        { property: 'og:site_name', content: SITE },
      ]}
    >
      <title>{fullTitle()}</title>
    </Helmet>
  )
}

Head.defaultProps = {
  page: '',
  title: SITE,
};

export default Head;
