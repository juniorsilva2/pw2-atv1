import { Buttons, Center, Commentary, Container, DivComments, DivMessage, DivUser, InfoCar, UserInfo } from "./style";
import Img1 from '../../assets/img1.png';
import Img2 from '../../assets/img2.png';
import { IoShieldCheckmark } from "react-icons/io5";
import { AiFillPhone } from "react-icons/ai";
import { CartCommentary } from '../../components/CartCommentary';

export const Home = () => {

    return (
        <Container>
            <Center>
                <h1>Encontre <span>Fábio</span> no local de partida</h1>
                <h3>Chega em 3 minutos (800 metros)</h3>
                <DivUser>

                    <UserInfo>
                        <div>
                            <img src={Img1} alt="img2" />
                            <div>
                                <span>★ 5.0</span>
                                <h4>Fábio D.</h4>
                            </div>
                        </div>
                        <div>
                            <img src={Img2} alt="img1" />
                        </div>
                    </UserInfo>
                    <InfoCar>
                        <h2>BCDOD19</h2>
                        <h3>Honda Civic Prata</h3>
                    </InfoCar>
                </DivUser>
                <DivMessage>
                    <Commentary>
                        <input
                            type="text"
                            placeholder="Enviar mensagem para Fábio..."
                        />
                    </Commentary>
                    <Buttons>
                        <button>
                            Publicar
                        </button>
                        <AiFillPhone />
                        <IoShieldCheckmark />
                    </Buttons>
                </DivMessage>
                <DivComments>
                    <CartCommentary 
                        message="Ótimo passeio."
                        img="1"    
                    />
                    <CartCommentary 
                        message="Não gostei, amei."
                        img="3" 
                    />
                    <CartCommentary 
                        message="O banco estava fedendo."
                        img="4" 
                    />
                </DivComments>
            </Center>
        </Container>
    );

}