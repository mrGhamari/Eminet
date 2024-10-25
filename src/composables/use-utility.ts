import jalaali from 'jalaali-js';
import { useQuasar } from 'quasar';
export function useUtility() {
  const $q = useQuasar();
  const convertDateTimeToDate = (date: string) =>
    new Date(date).toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    });

  const seprateNumber = (number: string | number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const convertGeorgianDateToJalali = (date: string) => {
    const jalaliDate = jalaali.toJalaali(new Date(date));
    return $q.lang.rtl
      ? `${jalaliDate.jd}-${jalaliDate.jm}-${jalaliDate.jy}`
      : `${jalaliDate.jy}-${jalaliDate.jm}-${jalaliDate.jd}`;
  };

  return { convertDateTimeToDate, seprateNumber, convertGeorgianDateToJalali };
}
