import { useState } from "react";
import "./search.css";
import axios from "axios";

function Search() {
  const [singer, setSinger] = useState();
  const [singerSongs, setSingerSongs] = useState([]);
  const getSinger = (e) => {
    e.preventDefault();
    if (singer) {
      axios
        .get("https://shazam.p.rapidapi.com/search", {
          params: {
            term: singer,
            locale: "en-US",
            offset: "0",
            limit: "5",
          },
          headers: {
            "x-rapidapi-host": "shazam.p.rapidapi.com",
            "x-rapidapi-key":
              "20cc88407amshc97689f86a45cbbp1c484fjsn658caa7ec61c",
          },
        })
        .then((res) => {
          setSingerSongs(res.data.tracks.hits);
          console.log(res.data.tracks.hits);
        });
    }
  };

  return (
    <>
      <div className="banner">
        <center>
          <div className="banner-content">
            <form onSubmit={getSinger}>
              <input
                type="text"
                placeholder="Enter Singer To Get Details"
                name="search"
                value={singer}
                onChange={(e) => setSinger(e.target.value)}
              />
              <button type="submit" className="btn-search">
                search
              </button>
            </form>
          </div>
        </center>
      </div>
      <div className="Singer-data">
        <div>
          {(() => {
            if (singerSongs.length > 0) {
              return (
                <div className="table" style={{ float: "left !important" }}>
                  <div class="tbl-content">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <thead>
                        <tr>
                          <th>index</th>
                          <th className="singer-song" style={{textAlign: 'left', paddingLeft: "2vh"}}>Song</th>
                          <th>Play</th>
                          <th>Love</th>
                        </tr>
                      </thead>
                      {singerSongs.map((songs, index) => {
                        return (
                          <tbody>
                            <tr>
                              <td>{index + 1}</td>
                              <td className="singer-song" style={{textAlign: 'left', paddingLeft: "2vh"}}>{songs.track.title}</td>
                              <td><a href={songs.track.url} style={{textDecoration: 'none'}}>▶️</a></td>
                              <td><a href="." style={{textDecoration: 'none'}}>❤️</a></td>
                            </tr>
                          </tbody>
                        );
                      })}
                    </table>
                  </div>
                </div>
              );
            } else if (singer && singerSongs.length === 0) {
               
            } else {
              return null;
            }
          })()}
        </div>
      </div>
    </>
  );
}

export default Search;
