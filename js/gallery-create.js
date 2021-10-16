export const createGallery = (galleryItems, query) => {
    const galleryArr = galleryItems.map((element) => {
        const { preview, original, description } = element
        return query({preview, original, description})
    })
return galleryArr.join("")
}