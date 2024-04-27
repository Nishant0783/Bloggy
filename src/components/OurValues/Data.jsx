import { v4 as uuidv4 } from 'uuid';
import diversity from '../../assets/diversity.png'
import authenticity from '../../assets/authenticity.png'
import improvement from '../../assets/improvement.png'

const Data = [
    {
        id: uuidv4(),
        image: diversity,
        heading: 'Diversity',
        subHeading: 'We celebrate diversity in all its forms and are committed to creating an inclusive environment where everyone feels welcome and valued.'
    },
    {
        id: uuidv4(),
        image: authenticity,
        heading: 'Authenticity',
        subHeading: 'We believe in the power of authenticity and encourage our users to share their stories with honesty, vulnerability, and integrity.'
    },
    {
        id: uuidv4(),
        image: improvement,
        heading: 'Improvement',
        subHeading: 'We are dedicated to continuously improving our platform to better serve the needs of our users. Your feedback is invaluable to us.'
    },
];

export default Data;