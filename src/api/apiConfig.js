const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '2f8d681bab06e1b67f9bdc85d84d3dd8',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;