import { createStyles } from '@material-ui/core';

const cardModalStyle = ({ spacing }) => createStyles({
  sfFont: {
    fontFamily: '"SF Pro", sans-serif',
  },
  normalFont: {
    fontWeight: 600,
  },
  lightFont: {
    fontWeight: 300,
  },
  cardHeader: {
    height: spacing(5),
    flexDirection: 'row-reverse',
    textAlign: 'center',
    maxWidth: '100%',
  },
  cardContent: {
    padding: `${spacing(2)}px ${spacing(3)}px`,
  },
  cardContentText: {
    marginBottom: spacing(2),
    backgroundColor: 'white',
    lineHeight: '16px',
  },
  showMoreButton: {
    margin: 0,
    padding: 0,
  },
  owners: {
    marginTop: spacing(1),
  },
  avatar: {
    margin: '0px 10px',
    border: '2px solid black',
  },
  bidButton: {
    marginTop: spacing(2),
    textTransform: 'capitalize',
    backgroundColor: '#464646',
    padding: spacing(1.8),
  },
  bidButtonText: {
    letterSpacing: '1px',
  },
});

export default cardModalStyle;
