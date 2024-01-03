export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const mockApiResponse = {
      status: 200,
      body: 'mock-response-data',
    };

    setTimeout(() => {
      resolve(mockApiResponse);
    }, 1000);
  });
}
