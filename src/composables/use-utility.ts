export function useUtility() {
  const convertDateTimeToDate = (date: string) =>
    new Date(date).toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    });

  const seprateNumber = (number: string | number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return { convertDateTimeToDate, seprateNumber };
}
