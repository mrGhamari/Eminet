import { useApi } from 'src/composables/use-api';

const BaseURL = useApi(process.env.BASE_URL as string);

//* ------ Functions ------
export default function useMvpService() {
  const getAllImmigo = async (query?: object) => await BaseURL.get('room', query);
  return { getAllImmigo };
}
