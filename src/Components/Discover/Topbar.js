import React from 'react'

const Topbar = ({ data }) => {


  const population = () => {
    const str = data.population.toString()
    let two = str.substr(-6, 3);
    let three = str.substr(-3);
    let str1 = two + three;
    let one = str.substr(0, (str.length - str1.length));
    return one + " " + two + " " + three
  }

  return (
    <nav className="topbar">
      <ul>
        <li>
          <p> {data.subregion}</p>
          <small className="text-muted">Region</small>
        </li>
        <li>
          <p>{data.area}</p>
          <small className="text-muted">Area, <br />sq.km</small>
        </li>
        <li>
          <img src={data.flag} width="40" height="30" alt=" " style={{ border: "1px solid black" }}></img>
          <small className="text-muted">Flag</small>
        </li>
        <li>
          <p>{population}</p>
          <small className="text-muted">Population, ppl</small>
        </li>
        <li>
          <p>
            {data.currencies && data.currencies[0].name} ({data.currencies && data.currencies[0].symbol}) </p>
          <small className="text-muted">Local currency</small>
        </li>
        <li>
          <p>{data.languages && data.languages.map(i => (i.iso639_1) + ' ')}</p>
          <small className="text-muted">Language(s)</small>
        </li>
      </ul>
    </nav>
  );
};

export default Topbar;
