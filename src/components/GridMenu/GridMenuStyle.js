import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "20%",
        marginLeft: "25%",
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.primary,
        cursor: "pointer"
    },
    link: {
        textDecoration: "None",
        color: theme.palette.text.primary
    }
}));

export default useStyles;