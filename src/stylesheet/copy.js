import breakpoints from './breakpoints';

const fonts = {
  abel: { fontFamily: "'Abel', sans-serif" },
  lato: { fontFamily: "'Lato', sans-serif" },
};

const copy = {
  h1: {
    fontSize: '18px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    ...fonts.abel,
  },
  h2: {
    fontSize: '10px',
    ...fonts.lato,
  },
  h3: {
    fontSize: '18px',
    textTransform: 'uppercase',
    ...fonts.abel,
  },
  h4: {
    fontSize: '20px',
    ...fonts.abel,
  },
  h5: {
    fontSize: '16px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    ...fonts.abel,
  },
  h6: {
    fontSize: '12px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    ...fonts.abel,
  },
  p: {
    fontSize: '14px',
    ...fonts.lato,
    [breakpoints.desktop]: {
      fontSize: '16px',
    },
  },
  copyright: {
    fontSize: '10px',
    fontWeight: 'bold',
    ...fonts.lato,
  }
};

export default { ...fonts, ...copy };
