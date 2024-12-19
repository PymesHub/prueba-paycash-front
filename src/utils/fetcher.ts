import axiosInstance from "../infra/axios/axiosClient";

const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

export { fetcher };
