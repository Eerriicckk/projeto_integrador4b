import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Carrossel from '../components/Carrossel';
import { SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Home = () => {
    const [reviews, setReviwes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [imagesLugaresAjudados] = useState([
        "lugaresAjudados(1)",
        "lugaresAjudados(2)",
        "lugaresAjudados(3)",
        "lugaresAjudados(4)",
        "lugaresAjudados(5)",
        "lugaresAjudados(6)"
    ]);

    const [slidesPerView, setSlidesPerView] = useState(3);

    const isSmallScreen = useMediaQuery({ minWidth: 461, maxWidth: 660 });
    const isTinyScreen = useMediaQuery({ maxWidth: 460 });

    const navigate = useNavigate();

    const fazerRequisicao = async () => {
        try {
            const limit = 7;
            setLoading(true);
            setLoading(true);

            const request = await fetch(`https://dummyjson.com/comments?limit=${limit}`);
            const data = await request.json();
            const finalData = [];

            for (let index = 0; index < data.comments.length; index++) {
                const comment = data.comments[index];

                let text = comment.body;
                // { label: "Português (Portugal, Brasil)", value: "pt" },
                // { label: "Inglês", value: "en" },
                const url = `https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=${"en"}&tl=${"pt"}&q=${text}`;
                const responseTraducao = await fetch(url);
                const dataTraducao = await responseTraducao.json();
                text = dataTraducao[0];


                finalData.push({
                    profilePic: `https://api.dicebear.com/9.x/miniavs/svg?seed=${comment.user.username}`,
                    name: comment.user.fullName,
                    body: text
                })
            }

            setReviwes(finalData);
        } catch (error) {
            console.log(error)
            alert("Algum erro ocorreu, tente novamente em alguns instantes");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => { fazerRequisicao() }, [])

    useEffect(() => {
        if (isSmallScreen) {
            return setSlidesPerView(2);
        } else if (isTinyScreen) {
            return setSlidesPerView(1);
        } else {
            return setSlidesPerView(3);
        }
    }, [isSmallScreen, isTinyScreen])

    return (
        <div className='home'>
            <br />
            <div id='paragrafoHome'>
                <div style={{ textAlign: 'justify' }}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices aliquam urna nec eleifend. Praesent ultrices augue maximus neque efficitur pharetra. Pellentesque in sapien consequat, molestie nunc eu, congue nulla. Fusce venenatis nisl neque, ut pulvinar nulla imperdiet sit amet. Aliquam vel dolor at urna facilisis dictum vitae ut justo. Praesent quis nulla vel tortor hendrerit ornare. Aenean imperdiet semper egestas. Vivamus mi lorem, tincidunt sit amet neque vel, ornare ullamcorper ipsum. Donec molestie elit in justo cursus, eget ultricies urna tempus.
                    </p>
                    <p>
                        Aliquam hendrerit dolor non lacus aliquet ultricies. Nullam risus nibh, luctus nec vestibulum elementum, eleifend et nisl. Praesent in mi nisi. Sed sit amet dolor et ex euismod euismod. Quisque in mollis leo. Phasellus sed odio in lectus auctor suscipit. Nunc non congue lorem. Cras malesuada semper augue vel condimentum. Pellentesque faucibus porttitor iaculis. Fusce non nibh non quam iaculis tristique at ut lacus. Sed aliquet eleifend orci eget hendrerit. Duis tempus hendrerit iaculis. Aliquam elementum tempor tortor ut iaculis. Nulla ut diam luctus, eleifend nisl eget, mattis sapien. Donec vitae tortor at neque tempor luctus vel et orci.
                    </p>
                    <p>
                        Aliquam porta tincidunt dolor, eu ullamcorper eros congue non. Donec sagittis nisi vitae elit lobortis finibus. Fusce arcu arcu, auctor nec posuere non, egestas a metus. Vivamus consequat massa et magna placerat eleifend. Sed nec mollis mi. Fusce ac feugiat orci, ac ultricies velit. Quisque blandit imperdiet justo, et volutpat mauris interdum vel. Aliquam a erat a quam fringilla bibendum. Vivamus lacus odio, pretium nec interdum eu, tincidunt vitae neque. Curabitur faucibus blandit porttitor. Donec ut purus faucibus purus eleifend dignissim. Nulla porttitor maximus leo in varius. Nulla congue nec purus sed gravida. Etiam sit amet massa vitae erat tempor sodales.
                    </p>
                </div>
                <Button onClick={() => navigate("/cadastro")}>Quero ajudar</Button>
            </div>

            <div style={{ textAlign: "center" }}>
                <h1>Confira alguns dos lugares em que já ajudamos</h1>
                <div className='carrosselDiv' >
                    <Carrossel slidesPerView={slidesPerView} centeredSlides={false}>
                        {imagesLugaresAjudados.map((image, key) => (
                            <SwiperSlide key={key} style={{ width: "fit-content" }}>
                                <div className='carrosselLugaresDiv'>
                                    <img src={`/imagens/resized-images/${image}.png`} alt="" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Carrossel>
                </div>
            </div>
            <br /><br /><br />
            <div style={{ textAlign: "center" }}>
                <h1>Veja o que as pessoas estão falando sobre nós</h1>
                <div className='carrosselDiv'>
                    {loading ? <>carregando</>
                        :
                        <>
                            <Carrossel slidesPerView={slidesPerView} centeredSlides={false}>
                                {reviews.map((review, key) =>
                                (
                                    <SwiperSlide key={key}>
                                        <div className='reviewDiv'>
                                            <img src={review.profilePic} alt="" />
                                            <p>{review.name}</p>
                                            <p>{review.body}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Carrossel>
                        </>
                    }
                </div>
            </div>
            <br /><br /><br />
        </div>
    )
}

export default Home