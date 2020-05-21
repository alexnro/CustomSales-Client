import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        marginLeft: "5%",
        marginRight: "5%",
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

export default useStyles;