const loadServices = async () => {
    let res = await fetch(`https://api.eligo.cloud/wp-json/wp/v2/services?category=allparent`)
    let data = await res.json()
    return data
}
const loadAllServices = async (slug) => {
    let res = await fetch(`https://api.eligo.cloud/wp-json/wp/v2/services?category=${slug}`)
    let data = await res.json()
    return data
}

const loadAllInnerServices = async (slug) => {
    let res = await fetch(`https://api.eligo.cloud/wp-json/wp/v2/services?category=${slug}&sub-category=all`)
    let data = await res.json()
    return data
}

import Link from 'next/link'
import React from 'react'

async function page({ params }) {
    let { slug } = params
    console.log(`this is [slug] = ${slug}`)
    let resp = await loadAllServices(slug)
    let resp2 = await loadAllInnerServices(slug)
    let { child_posts } = resp2

    
    
    return (
        <div>
            {
                resp.map((ele) => {
                    return <div key={ele.id}>
                        <h1>{ele.slug}</h1>
                    </div>
                })
            }


            {
                child_posts.map((ele) => {
                    return <div key={ele.id}>
                        
                        <Link href={`/services/${slug}/${ele.slug}`}>
                        {ele.slug}
                        </Link>
                    </div>
                })
            }

        </div>
    )
}

export default page


 
