import breakpoints from './breakpoints';
import colors from './colors';
import copy from './copy';

const layout = {
  block: { display: 'block' },
  inlineBlock: { display: 'inline-block' },
  flex:            { display: 'flex' },
  flexHalf:        { flex: 0.5, display: 'flex' },
  flexRow:         { flexDirection: 'row' },
  flexColumn:      { flexDirection: 'column' },
  rowReverse:      { flexDirection: 'row-reverse' },
  columnReverse:   { flexDirection: 'column-reverse' },
  noWrap:          { flexWrap: 'nowrap' },
  wrap:            { flexWrap: 'wrap' },
  justifyStart:    { justifyContent: 'flex-start' },
  justifyEnd:      { justifyContent: 'flex-end' },
  justifyCenter:   { justifyContent: 'center' },
  spaceBetween:    { justifyContent: 'space-between' },
  spaceAround:     { justifyContent: 'space-around' },
  alignStart:      { alignItems: 'flex-start' },
  alignEnd:        { alignItems: 'flex-end' },
  alignCenter:     { alignItems: 'center' },
  alignBase:       { alignItems: 'baseline' },
  alignStretch:    { alignItems: 'stretch' },
  selfStart:       { alignSelf: 'flex-start' },
  selfEnd:         { alignSelf: 'flex-end' },
  selfCenter:      { alignSelf: 'center' },
  selfBase:        { alignSelf: 'baseline' },
  selfStretch:     { alignSelf: 'stretch' },
  grow0:           { flexGrow: 0 },
  grow1:           { flexGrow: 1 },
  shrink0:         { flexShrink: 0 },
  shrink1:         { flexShrink: 1 },
  overflowVisible: { overflow: 'visible' },
  overflowScroll:  { overflow: 'scroll' },
  t0:              { top: 0 },
  l0:              { left: 0 },
  r0:              { right: 0 },
  b0:              { bottom: 0 },

  // theme
  navLink: {
    color: colors.black,
    fontSize: '12px',
    cursor: 'pointer',
    textDecoration: 'none',
    ...copy.abel,
    ':hover': {
      '.text': {
        borderBottom: `1px solid ${colors.black}`,
      },
    },
    [breakpoints.desktop]: {
      fontSize: '18px'
    },
  },
  label: {
    fontSize: '12px',
    marginBottom: '5px',
    textAlign: 'left',
    textTransform: 'lowercase',
    ...copy.lato,
  },
  input: {
    fontSize: '14px',
    marginBottom: '20px',
    border: `1px solid ${colors.black}`,
    padding: '5px',
    background: 'none',
    ...copy.lato
  },
  button: {
    backgroundColor: colors.black,
    padding: '5px',
    cursor: 'pointer',
    color: colors.white,
    borderRadius: '0',
    border: `1px solid ${colors.black}`,
    fontSize: '16px',
    textTransform: 'uppercase',
    ...copy.abel,
    ':hover': {
      backgroundColor: colors.purple,
    },
    ':disabled': {
      opacity: '0.8',
      cursor: 'not-allowed',
      ':hover': {
        backgroundColor: colors.black,
      }
    }
  },
  smallWarningLink: {
    fontSize: '11px',
    color: colors.purple,
    textDecoration: 'none',
    textTransform: 'lowercase',
    cursor: 'pointer',
    ':hover': {
      color: colors.blue,
    }
  },
};

export default layout;
