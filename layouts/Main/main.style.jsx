import { createStyles } from '@material-ui/core';

const mainStyle = ({ spacing }) => createStyles({
  mainContainer: {
    padding: `${spacing(1.2)}px ${spacing(1.5)}px`,
  },
  contentItems: {
    padding: spacing(1),
    display: 'flex',
  },
  avatar: {
    padding: spacing(1),
  },
});

export default mainStyle;
