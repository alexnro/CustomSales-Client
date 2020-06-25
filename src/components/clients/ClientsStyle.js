import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            borderBottom: 'unset',
        }
    },
    table: {
        marginTop: "7.5%"
    },
    modalDivider: {
        marginBottom: "5%"
    }
}));

export { useStyles };