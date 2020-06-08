import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    shoppingCart: {
        cursor: "pointer",
        marginRight: "20px"
    },
    menuPaper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.primary,
        cursor: "pointer"
    },
    continueButton: {
        marginRight: "5%"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    link: {
        textDecoration: "None",
        color: theme.palette.text.primary
    }
}));

export { useStyles };