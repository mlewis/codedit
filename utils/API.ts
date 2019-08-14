import 'isomorphic-unfetch';

const apiUrl = process.env.API_URL;

const buildRequestUrl = (path: string, data: any = null) => {
  let requestUrl = path.includes('?format=json') ? `${apiUrl}${path}`
    : `${apiUrl}${path}?format=json`;
  if (data) {
    Object.keys(data).forEach((key) => {
      requestUrl += `&${key}=${data[key]}`;
    });
  }

  return requestUrl;
};

async function makeFetchRequest(path: string, data: object | null = null, headers: object = {}) {
  const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  try {
    const requestUrl = buildRequestUrl(path, data);
    const newHeaders = Object.assign({}, defaultHeaders, headers);
    const response = await fetch(requestUrl, {
      headers: newHeaders,
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
  return Promise.resolve(null);
}

async function makePostRequest(path: string, data: object | null = null, headers: object = {}) {
  const postHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  try {
    const requestUrl = buildRequestUrl(path);
    const newHeaders = Object.assign({}, postHeaders, headers);
    const response = await fetch(requestUrl, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: newHeaders,
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
  return Promise.resolve(null);
}

export { makeFetchRequest, makePostRequest };
