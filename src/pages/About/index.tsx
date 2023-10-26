import * as React from 'react';
import NumberInput from '../../components/NumberInput.tsx';
import { Container } from '@mui/material';
// import Loader from '../../components/Loader';

export const About = () => {
    const [defaultValue, setValue] = React.useState(12323);
    const onChange = (value: number) => {
        console.log('>>', value);
    };
    React.useEffect(() => {
        setTimeout(() => {
            setValue(12);
        }, 2000);
    }, [setValue]);

    console.log(defaultValue);
    return (
        <Container>
            {/* <Loader /> */}
            <br />
            <br />
            <div style={{ width: '300px' }}>
                <NumberInput onChange={onChange} value={defaultValue} min={0} />
            </div>
            <h5>About comming soon...</h5>
        </Container>
    );
};

export default About;
