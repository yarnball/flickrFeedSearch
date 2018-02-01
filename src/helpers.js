export const formatImg = images => {
  return images
    .map(img => ({
      src: `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${
        img.secret
      }.jpg`,
      id: img.id
    }))
    .slice(0, 50)
}