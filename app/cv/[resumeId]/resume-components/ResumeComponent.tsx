import React from 'react'
import RandomInformationComponent from './random-information-components/RandomInformationComponent'
import ResumeExperienceComponent from './resume-experience-component/ResumeExperienceComponent'
import ResumeProfile from './profile-components/ResumeProfileComponent'

function ResumeComponent() {
  return (
    <>
    <div className="flex flex-row p-2 space-x-1 bg-black-200">

<RandomInformationComponent/>
<ResumeProfile/>
<ResumeExperienceComponent/>
</div>
    </>
  )
}

export default ResumeComponent