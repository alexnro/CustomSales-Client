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
    }
}));

export { useStyles };
