import React, { useState } from "react"
import { Artworks } from "Artworks"

export const Details = () => {
  const [selectedGenre, setSelectedGenre] = useState([])
  const [textInput, setTextInput] = useState("")

  const fetchDetails = (textInput) => {
    fetch(
      `https://best-artworks-open-api-pde.herokuapp.com/artworks${textInput}`
    )
      .then((res) => res.json())
      .then((json) => {
        setSelectedGenre(json.response)
        console.log("from json", json.response)
      })
  }

  const onSetTextInputChange = (event) => {
    setTextInput(event.target.value)
  }

  const handleInput = (event) => {
    fetchDetails(textInput)
    setTextInput("")
    setSelectedGenre([])
    console.log("setTextinput", setTextInput)
    event.preventDefault()
  }

  return (
    <form onSubmit={handleInput}>
      <select type="text" value={textInput} onChange={onSetTextInputChange}>
        <option value="">Search by Genre</option>
        <option value="?genre=impressionism">Impressionism</option>
        <option value="?genre=realism">Realism</option>
        <option value="?genre=Surrealism">Surrealism</option>
        <option value="?genre=expressionism">Expressionism</option>
        <option value="?genre=Baroque">Baroque</option>
        <option value="?genre=renaissance">Renaissance</option>
      </select>
      <select type="text" value={textInput} onChange={onSetTextInputChange}>
        <option value="">Search by Nationality</option>
        <option value="?nationality=italian">Italian</option>
        <option value="?nationality=russian">Russian</option>
        <option value="?nationality=spanish">Spanish</option>
        <option value="?nationality=mexican">Mexican</option>
        <option value="?nationality=dutch">Dutch</option>
      </select>
      <button className="search-btn">Search</button>
      {textInput.length === 0 && <Artworks />}
      {textInput.length !== 0 && (
        <div className="card-container">
          {selectedGenre.map((art) => (
            <div key={art.id}>
              <div className="card">
                <p className="name">{art.name}</p>
                <p>
                  <span className="titles"> Year: </span>
                  {art.years}
                </p>
                <p>
                  <span className="titles">Nationality:</span> {art.nationality}
                </p>
                <p>
                  <span className="titles">Genre: </span>
                  {art.genre}.
                </p>
                <p>
                  <span className="titles">Bio:</span> {art.bio}
                </p>
                {/* <button>
                  <a href={`${art.wikipedia}`} target="_blank">
                    Click for wikipedia
                  </a>
                </button> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </form>
  )
}
