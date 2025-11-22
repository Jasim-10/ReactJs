import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import Page1Content from './components/Section1/Page1Content'


const App = () => {
  const users = [
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'A confident and satisfied customer enjoying seamless service that enhances workflow, efficiency, and everyday professional experience.',
      tag:'Satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1675789510270-b968e067b6e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Supporting individuals with limited banking access through reliable financial solutions',
      tag:'Underbanked'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1763734967190-fd5fa50ce8bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Empowering underserved communities with accessible opportunities, ensuring everyone receives the support and resources they deserve.',
      tag:'Undeserved'
    },
    {
    img:'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0',
    intro:'Our service empowers individuals with reliable solutions, ensuring convenience, trust, and smooth support throughout every interaction.',
    tag:'Empowered'
  },
  {
    img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0',
    intro:'We focus on improving financial awareness, guiding users toward smarter decisions and long-term stability through simplified resources.',
    tag:'Aware'
  },
  {
    img:'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0',
    intro:'Our platform delivers essential tools that help people grow, adapt, and achieve better opportunities in daily life.',
    tag:'Growing'
  },
  {
    img:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0',
    intro:'We connect individuals with meaningful support, empowering choices and improving accessibility for underserved communities everywhere.',
    tag:'Supported'
  }

  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
      
    </div>
  )
}

export default App
