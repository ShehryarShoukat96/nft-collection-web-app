import { createStyles } from '@material-ui/core';

const mediaIconStyle = ({ spacing }) => createStyles({
  socialLink: {
    lineHeight: 0,
    display: 'block',
  },
  icon: {
    height: spacing(4.5),
    width: spacing(4.5),
    margin: `${spacing(0)}px ${spacing(0.3)}px`,
  },
});

export default mediaIconStyle;
