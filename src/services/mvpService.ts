import { useApi } from 'src/composables/use-api';

const BaseURL = useApi(process.env.BASE_URL as string);

//* ------ Functions ------
export default function useMvpService() {
  const getAllImmigo = async (query?: object) => await BaseURL.get('room', query);
  const getAllScheduleImmigo = async (id: string) => await BaseURL.get(`time/${id}`);
  const reserveTime = async (roomId: string, data: object) => await BaseURL.post(`reservations/check/${roomId}`, data);
  const submitReserve = async (token: string, data: object) =>
    await BaseURL.post(`reservations/reserve/${token}`, data);
  const submitForm = async (reservationToken: string, data: object) =>
    await BaseURL.post(`reservations/reserve/${reservationToken}`, data);
  return { getAllImmigo, getAllScheduleImmigo, reserveTime, submitReserve, submitForm };
}
