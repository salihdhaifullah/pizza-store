import { ReactNode } from 'react';
import { Typography } from '@mui/material';

interface TitleProps {
    children?: ReactNode;
}

const Title = (props: TitleProps) => {
    return (
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            {props.children}
        </Typography>
    );
}

export default Title;