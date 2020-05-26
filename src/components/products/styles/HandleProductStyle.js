import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        }
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    addProduct: {
        marginBottom: "2%"
    }
}));

export { useStyles };
