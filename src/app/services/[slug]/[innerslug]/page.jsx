
const loadAllSingleServices = async (innerslug) => {
    let res = await fetch(`https://api.eligo.cloud/wp-json/wp/v2/services?sub-category=${innerslug}`)
    let data = await res.json()
    return data
}
const loadServices = async () => {
    let res = await fetch(`https://api.eligo.cloud/wp-json/wp/v2/services?category=allparent`)
    let data = await res.json()
    return data
}

const loadAllInnerServices = async (slug) => {
    let res = await fetch(`https://api.eligo.cloud/wp-json/wp/v2/services?category=${slug}&sub-category=all`)
    let data = await res.json()
    return data
}

import React from 'react'

async function page({ params }) {
    let { innerslug } = params
    console.log(`this is [innerslug] = ${innerslug}`)
    let data = await loadAllSingleServices(innerslug)
   
    return (
        <div>
            {
                data.map((ele) => {
                    return <div key={ele.id}>
                        <h1>{ele.slug}</h1>
                    </div>
                })
            }
        </div>
    )
}

export default page


 






 

