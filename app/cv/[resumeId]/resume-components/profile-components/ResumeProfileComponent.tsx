import React from 'react'
import CvEducation from './CvEducation'
import CvProfessionalProfileSummary from './CvProfessionalProfileSummary'
import CvProfileInfo from './CvProfileInfo'

function ResumeProfile() {
  return (
    <div>
      <CvProfileInfo/>
      <CvProfessionalProfileSummary/>
      <CvEducation/>
    </div>
  )
}

export default ResumeProfile