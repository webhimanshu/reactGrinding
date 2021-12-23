import React, { useEffect, useState } from "react";
import LineGraph from "./LineGraph";
import "./covid.css";
import Card from "./Card";
import axios from "./axious";
import CovidSummary from "./CovidSummary";

const Covid = () => {
  const [totalDeath, settotalDeath] = useState(0);
  const [totalRecovered, settotalRecovered] = useState(0);
  const [totalConfirmed, settotalConfirmed] = useState(0);
  const [loading, setloading] = useState(false);
  const [country, setCountry] = useState({});
  const [name, setName] = useState(""); //country name that will show data 
  const [days, setDays] = useState(7);
  const [coronaCountArr, setCoronaCountArr] = useState([]); //y axix corona  count to show on x line graph
  const [xDate, setxDate] = useState(""); //data x axix to show on linegraph

  const getCoronaReportByDate = (countryslug, from, to) => {
    fetch(
      `https://api.covid19api.com/country/${countryslug}/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const yAxixCoronaCount = data.map((d) => d.Cases);
        const xAxis = data.map((d) => d.Date);

        setxDate(xAxis);
       // console.log(xDate);

        const list = country.Countries.find(
          (item) => item.Country === countryslug
        );

        settotalConfirmed(list.TotalConfirmed);

        settotalDeath(list.TotalDeaths);
        settotalRecovered(list.TotalRecovered);

        setCoronaCountArr(yAxixCoronaCount);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const formatdate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = `${d.getMonth() + 1}`;//.slice(-2)

    const _date = d.getDate();
    return `${year}-${month}-${_date}`;
  };
  const handleCountry = (e) => {
    setName(e.target.value);
    const d = new Date();
  //  console.log(d);
    const to = formatdate(d);
  
    const from = formatdate(d.setDate(d.getDate() - days));
  //console.log(to);
  //console.log(d.getDate());
    getCoronaReportByDate(e.target.value, from, to);
  };

  const handleDays = (e) => {
    setDays(e.target.value);
    const d = new Date();
    const to = formatdate(d);
    const from = formatdate(d.setDate(d.getDate() - days));

    getCoronaReportByDate(name, from, to);
  };
  useEffect(() => {
    setloading(true);

    fetch("https://api.covid19api.com/summary")
      .then((res) => {
        
        return res.json();
       
      })
      .then((data) => {
      console.log(data);
        const {
          TotalConfirmed,
          TotalDeaths,
          TotalRecovered,
          NewDeaths,
          NewConfirmed,
        } = data.Global;

        settotalDeath(TotalDeaths);
        settotalConfirmed(TotalConfirmed);
        settotalRecovered(TotalRecovered);

        setCountry(data);
      });
    setloading(false);
  }, []);
  if (loading) {
    return <p>Fetching data from server</p>;
  }
  return (
    <>
      <CovidSummary
        totalDeath={totalDeath}
        totalRecovered={totalRecovered}
        totalConfirmed={totalConfirmed}
        country={name}
      />
      <div className="center-div">
        <select value={name} onChange={handleCountry}>
          <option value="">---select country---</option>
          {country.Countries &&
            country.Countries.map((country) => {
              return (
                <option key={country.slug} value={country.Country}>
                  {country.Country}
                </option>
              );
            })}
        </select>
        <select value={days} onChange={handleDays}>
          <option value="7">Last 7 days</option>
        {/* <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option> */}
        </select>
      </div>
      <LineGraph yAxix={coronaCountArr} xDate={xDate} />
    </>
  );
};

export default Covid;
