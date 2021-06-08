import { createStyles } from '@material-ui/core';

const headerSocialMediaStyle = ({ spacing }) => createStyles({
  mediaContainer: {
    backgroundColor: 'rgba(70,70,70,0.7)',
    padding: `${spacing(1)}px ${spacing(3)}px`,
    borderRadius: spacing(1),
  },
});

export default headerSocialMediaStyle;
