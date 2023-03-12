import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';


export const Inicio = () => {
  return (
    <div className="grid-section">
      {
        articles.map(article => {
          return (
            <div key={article.id} className={article.id === "ratones-2023" ? "box big-bx" : "box sml-bx"}>
              <div className="box-types"><span>{article.type}</span></div>
              <div className="box-img"><img src={'./images/' + article.img + '.webp'} alt="" /></div>
              <div className="box-text">
                <div className="text-centered">
                  <Link to={"/"+article.type+"/" + article.id}><h2>{article.titulo}</h2></Link>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  )
}
