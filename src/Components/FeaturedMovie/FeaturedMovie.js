import React from "react";
import './FeaturedMovie.css';

export default ({item}) => {

    let firstDate = new Date(item.first_air_date);
    let genders = [];
    for(let i in item.genders) {
        genders.push(item.genders[i].name)
    }

    let description = item.overview;
    if(description.length > 200) {
        description = description.substring(0, 200)+'...';
    }
    return (
       <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
            }}>

            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos </div>
                        <div className="featured--year">{firstDate.getFullYear()} </div>
                        <div className="featured--seasons">{item.number_of_season} temporada{item.number_of_season !== 1 ? 's' : ""}</div>
                    </div>
                    <div className="featured--description">{description}</div>
                    <div className="featured--buttons">
                       <a className="feature--watchbutton" href={`/watch/${item.id}`}>Assistir</a> 
                       <a className="feature--mylistbutton" href={`/list/add/${item.id}`}>+ Minha Lista</a> 
                    </div>
                    <div className="featured--genders"><strong>Gêneros:</strong> {genders.join(', ')}</div>
                </div>
            </div>
       </section>

    )
}