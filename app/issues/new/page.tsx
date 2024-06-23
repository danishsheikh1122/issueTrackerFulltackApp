import React from 'react'
import dynamic from 'next/dynamic'
import Loadingcmp from './loading'
const IssueForm=dynamic(()=>import('@/app/issues/_components/IssueForm'),{ssr:false ,loading:()=><Loadingcmp></Loadingcmp>})
const page = () => {
  return (
    <IssueForm></IssueForm>
  )
}

export default page