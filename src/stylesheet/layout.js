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
};

export default layout;
