import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        width: "50%"
    },
    label: {
        marginRight: "10%",
        width: "50%"
    },
    addButton: {
        marginBottom: "2%",
        marginLeft: "3%"
    },
    divider: {
        marginBottom: "5%"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    }
}));

export { useStyles };
