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
    filter: {
        background: "white",
        marginBottom: "2%"
    }
}));

const styles = () => ({
    margintop: {
        marginTop: "7.5%",
        marginBottom: "5%"
    },
    clientName: {
        color: "white"
    }
})

export { useStyles, styles };