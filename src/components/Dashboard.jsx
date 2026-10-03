import React from 'react'
import Stats from './Stats'
import RecentApplications from './RecentApplications'

const Dashboard = (props) => {
  return (
    <main className='min-h-screen bg-zinc-950 px-8 py-8 text-white'>
      <h2 className='text-3xl font-semibold'>Dashboard</h2>
        <p className='mt-1 text-sm text-zinc-400'>Welcome back, Sagar. Here's your application log overview.</p>
          <Stats applications={props.applications}/>
          <RecentApplications applications={props.applications  }/>
    </main>
  )
}

export default Dashboard
