const loadServices=async()=>{
    let res=await fetch(`https://api.eligo.cloud/wp-json/wp/v2/services?category=allparent`)
    let data=await res.json()
    return data
}


import Link from 'next/link'
import React from 'react'

async function page() {

    let data=await loadServices()
  return (
    <>
    {
        data.map((ele)=>{
            return <div key={ele.id}>

              
                <Link href={`/services/${ele.slug}`}>
                {ele.slug}
                </Link>

            </div>
        })

    }
    </>
  )
}

export default page
