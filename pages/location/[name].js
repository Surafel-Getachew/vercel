import React from 'react'

const Name = () => {
    return (
        <div>
            <h1>Location</h1>
        </div>
    )
}

// export const getStaticPath = async() => {
//     const res = await fetch("http://localhost:5000/mercha")
//     const posts = await res.json();
//     const paths = posts.map((post) => ({
//         params:{name:post.officialName}
//     }))
//     return  {paths,fallback:false}
// }

// export const getStaticProps = async({params}) => {
//     const res = await fetch(`http://localhost:5000/mercha/test/${params.name}`);
//     const mercha = res.map((res) => ({

//     }))
//     const post = res.json();
//     return 
// }

export default Name
