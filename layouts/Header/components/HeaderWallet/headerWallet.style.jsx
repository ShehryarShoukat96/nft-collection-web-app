import { createStyles } from '@material-ui/core';

const HeaderWalletStyle = ({ spacing }) => createStyles({
  containerGrid: {
    padding: `${spacing(1)}px ${spacing(3)}px`,
  },
  button: {
    fontFamily: '"NeueBit", sans-serif',
    color: '#fff',
    backgroundColor: 'rgba(70,70,70,0.7)',
  },
});

export default HeaderWalletStyle;
