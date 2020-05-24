import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    formControl: {
        margin: theme.spacing(1),
    }
}));

const styles = () => ({
    margintop: {
        marginTop: "7.5%",
        marginBottom: "5%"
    }
})

export { useStyles, styles };