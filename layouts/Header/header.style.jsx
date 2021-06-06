import { createStyles } from '@material-ui/core';

const headerStyle = ({ spacing }) => createStyles({
  title: {
    fontFamily: '"NeueBit", sans-serif',
    fontSize: spacing(3),
    color: '#FFFFFF',
    textAlign: 'center',
    margin: `${spacing(3)}px ${spacing(0)}px`,
    textShadow: '-1px 0 #5B6BB2, 0 1px #5B6BB2, 1px 0 #5B6BB2, 0 -1px #5B6BB2',
    textTransform: 'uppercase',
  },
});

export default headerStyle;
