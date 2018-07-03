import React from 'react';

let jobs = [
  {
    "sortOrder": 0,
    "startDate": "2016",
    "endDate": "2016",
    "title": "The Guide Life",
    "tags": [ "web development", "ecommerce", "react" ],
    "description": "The kahless is more dosi now than star. harmless and surprisingly terrifying. Why does the crewmate go?",
    "image": [ "https://picsum.photos/g/300/200" ],
    "links": [ "https://patrickjones.tech" ],
  },
  {
    "sortOrder": 1,
    "startDate": "2016",
    "endDate": "2018",
    "title": "Ace Media Productions",
    "tags": [ "software development", "python", "web scraping", "long-term" ],
    "description": "Decorate one quarter cup of nachos in a dozen tablespoons of red wine.To the yellow chickpeas add margerine, watermelon, olive oil and whole chicken.",
    "image": [ "https://picsum.photos/g/300/200" ],
    "links": [ "https://patrickjones.tech" ],
  },
  {
    "sortOrder": 0,
    "startDate": "2016",
    "endDate": "2016",
    "title": "First Job",
    "tags": [ "job", "temporary" ],
    "description": "The kahless is more dosi now than star. harmless and surprisingly terrifying. Why does the crewmate go?",
    "image": [ "https://picsum.photos/g/300/200" ],
    "links": [ "https://patrickjones.tech" ],
  },
  {
    "sortOrder": 1,
    "startDate": "2016",
    "endDate": "2018",
    "title": "Latest Job",
    "tags": [ "job", "long-term" ],
    "description": "Decorate one quarter cup of nachos in a dozen tablespoons of red wine.To the yellow chickpeas add margerine, watermelon, olive oil and whole chicken.",
    "image": [ "https://picsum.photos/g/300/200" ],
    "links": [ "https://patrickjones.tech" ],
  }
];
const Work = () => (
  <div className="content-wrapper">
    <div className="route-body">
      <h2>Work</h2>
      {jobs.map( (job, index) => (
        <div className={`job-${ index % 2 === 0 ? 'right' : 'left' }`}>
          <img srcSet={job.image[0]} alt=""/>
          <h2 className="job-title">{job.title}</h2>
          <p className="job-description">{job.description}</p>
        </div>
      ))}

    </div>
  </div>
);

export default Work;


// work
// the guide life
// acemedia?
// bad hero productions
// Kris Walker?
// opentruk.com
// tramps hosiery