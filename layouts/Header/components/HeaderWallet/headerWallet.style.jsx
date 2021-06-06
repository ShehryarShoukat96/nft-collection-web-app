import { createStyles } from '@material-ui/core';

const HeaderWalletStyle = ({ spacing }) => createStyles({
  containerGrid: {
    marginTop: spacing(1),
    marginBottom: spacing(1),
    padding: spacing(3),
  },
  button: {
    fontFamily: '"NeueBit", sans-serif',
    color: '#fff',
    backgroundColor: 'rgba(70,70,70,0.7)',
  },
});

export default HeaderWalletStyle;
