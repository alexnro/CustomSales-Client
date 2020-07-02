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
    openButton: {
        marginBottom: "2%"
    },
    addButton: {
        marginRight: "5%"
    }
}));

export { useStyles };
