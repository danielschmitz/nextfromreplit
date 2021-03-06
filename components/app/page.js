import { CardActions, CardContent, Paper, Typography } from "@material-ui/core";

/**
 * 
 * @param {*} props.title Page Title
 * @param {*} props.actions Actions
 */
export default function Page(props) {
    return (
        <div className="contentApp">
            <Paper variant='outlined'>
                {props.title && <CardContent>
                    <Typography variant="h5" component="h2">
                        {props.title}
                    </Typography>
                </CardContent>
                }
                <CardContent>
                    {props.children}
                </CardContent>
                {props.actions && <CardActions>
                    {props.actions}
                </CardActions>
                }
            </Paper>
        </div>
    )
}