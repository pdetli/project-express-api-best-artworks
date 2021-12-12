import React, { useEffect, useState } from "react"

export const Artworks = () => {
  const [arts, setArts] = useState([])

  const ArtworksAPI =
    "https://best-artworks-open-api-pde.herokuapp.com/artworks"

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
              <a
                href={`${art.wikipedia}`}
                target="_blank"
                rel="noopener noreferrer"
                className="name"
              >
                {art.name}
              </a>

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
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
