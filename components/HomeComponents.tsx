import { Typography } from '@mui/material'
import Image from 'next/image'
import homeImage from '../assets/images/pizza-3000285_1920 1.png'
import style from './home.module.css'

const HomeComponents = () => {
    return (
        <div>
            <div>
                <div>
                    <Typography variant="h1" component="h2">
                        h1. Heading
                    </Typography>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis unde nobis
                        consectetur natus, voluptas, adipisci rerum fugit qui ut quae eligendi quaerat
                        quas, deserunt facere at eos aliquam ipsam animi.
                    </p>
                </div>
                <Image src={homeImage} alt="pizza" />
            </div>
        </div>
    )
}

export default HomeComponents