import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { articles } from '../data/articles';

export const Articulo = () => {

    const [articulos, setArticulo] = useState({});

    const params = useParams();

    useEffect(() => {
        let articulo = articles.filter(article => article.id === params.id);
        setArticulo(articulo[0]);
    
        // Cambiar la URL del navegador para reflejar el ID del artículo
        window.location.hash = `#/${params.type}/${params.id}`;
    }, [params.id, params.type]);

    return (
        <section>
            {articulos && (
                <HelmetProvider>
                    <Helmet>
                        <title>{articulos.titulo + " | Chpanth"}</title>
                    </Helmet>
                    <div className="content-sec">
                        <div className="prodct-bx">
                            <div className="first-text">
                                <h1>{articulos.titulo}</h1>
                                <p>{articulos.descripcion}</p>
                            </div>
                        </div>
                        {
                            articulos.content && articulos.content.map(content => {
                                return (
                                    <div className="prodct-bx" key={content.id}>
                                        <div className="title-bx">
                                            <h2>{content.titulo}</h2>
                                            <h3>{content.subtitulo}</h3>
                                        </div>
                                        <div className="imgca-bx">
                                            <a href={content.link} target="_blank"><img src={'./images/' + content.img + '.webp'} alt={content.titulo} /></a>
                                            <ul>
                                                {content.caracteristicas.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="text-bx">
                                            {content.conclusion ? <p>{content.conclusion}</p> : ""}
                                            <div className="content-button">
                                                <a href={content.link} target="_blank">Ver en Amazon</a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </HelmetProvider>
            )}
        </section>
    )
}
