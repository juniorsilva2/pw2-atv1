import { Container } from "./style";
import Img1 from '../../assets/img1.png';
import Img3 from '../../assets/img3.jpg';
import Img4 from '../../assets/img4.jpg';
import { FiTrash } from 'react-icons/fi';

interface Props {
    message: string;
    img: string;
}

export const CartCommentary = ({ message, img }: Props) => {

    return (
        <Container>

            <div>
                {
                    img == "1" && (
                        <img src={Img1} alt="image" />
                    )                    
                }
                {
                    img == "3" && (
                        <img src={Img3} alt="image" />
                    )
                }
                {
                    img == "4" && (
                        <img src={Img4} alt="image" />
                    )
                }
                <p>{message}</p>
            </div>
            <FiTrash />
        </Container>
    );

}