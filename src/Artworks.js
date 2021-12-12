import React, { useEffect, useState } from "react"

export const Artworks = () => {
  const [arts, setArts] = useState([])

  const ArtworksAPI =
    "https://best-artworks-open-api-pde.herokuapp.com/artworks"

  console.log(arts)

  useEffect(() => {
    fetch(ArtworksAPI)
      .then((res) => res.json())
      .then((json) => setArts(json.response))
  }, [])

  return (
    <>
      <div className="card-container">
        {arts.map((art) => (
          <div key={art.id}>
            <div className="card">
              <p className="name">{art.name}</p>
              <p>
                <span className="titles">Year: </span> {art.years}
              </p>
              <p>
                <span className="titles">Nationality: </span>
                {art.nationality}
              </p>
              <p>
                <span className="titles">Genre: </span>
                {art.genre}.
              </p>
              {/* <p>Bio: {art.bio}</p> */}
              <button>
                <a href={`${art.wikipedia}`} target="_blank">
                  Click for wikipedia
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
