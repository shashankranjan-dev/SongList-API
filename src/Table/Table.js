import "./table.css";

function Table() {
    return(
        <div className="table">
          <h2>Kishore Kumar</h2>
        <div className="tbl-header">
        <table cellpadding="0" cellspacing="0" border="0">
          <thead>
            <tr>
              <th>Movie Name</th>
              <th>Song</th>
              <th>Duration</th>
              <th>Lyrics</th>
              <th>Details</th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="tbl-content">
        <table cellpadding="0" cellspacing="0" border="0">
          <tbody>
            <tr>
              <td>XYZ</td>
              <td>Neele Neele Ambar</td>
              <td>1.38</td>
              <td>Laxmikant Pyarelaal</td>
              <td>sex</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    )
}

export default Table;