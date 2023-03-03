export const getProducts = async (id) => {
    let res =  await fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
    return res
} 