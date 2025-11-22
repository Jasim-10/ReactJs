import React from 'react';
import Card from './components/card';



const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Senior UI/UX Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "10 days ago",
      post: "Frontend Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$85/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$140/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "3 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$110/hr",
      location: "Pune, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "1 week ago",
      post: "Product Designer",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: "$150/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "10 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$170/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Data Analyst",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$75/hr",
      location: "Delhi, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      companyName: "NVIDIA",
      datePosted: "4 days ago",
      post: "AI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$180/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://logos-world.net/wp-content/uploads/2020/09/IBM-Symbol.jpg",
      companyName: "IBM",
      datePosted: "8 days ago",
      post: "Software Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$95/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24760594/Adobe_wordmark.jpg?quality=90&strip=all&crop=7.8125,0,84.375,100",
      companyName: "Adobe",
      datePosted: "2 days ago",
      post: "UX Researcher",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$130/hr",
      location: "Mumbai, India"
    }
  ];




  return (

    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        return <div key={idx}>
          <Card company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} datePosted={elem.datePosted}  logo={elem.brandLogo}/>
        </div>
      })}
    </div>
  )
}

export default App
