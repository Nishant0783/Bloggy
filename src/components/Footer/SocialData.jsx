import { v4 as uuidv4 } from 'uuid';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Data = [
    {
        id: uuidv4(),
        icon: faInstagram,
        link: 'https://www.instagram.com/nishant.paliwal783/',
    },
    {
        id: uuidv4(),
        icon: faLinkedin,
        link: 'https://www.linkedin.com/in/nishant-paliwal-473a50262/',
    },
    {
        id: uuidv4(),
        icon: faGithub,
        link: 'https://github.com/Nishant0783',
    },

];;

export default Data;