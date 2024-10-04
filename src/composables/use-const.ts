export function useConst() {
  const daysConvertor = (day: number): string => {
    switch (day) {
      case 0:
        return 'saturday';
      case 1:
        return 'sunday';
      case 2:
        return 'monday';
      case 3:
        return 'tuesday';
      case 4:
        return 'wednesday';
      case 5:
        return 'thursday';
      case 6:
        return 'friday';
      default:
        return 'Invalid day';
    }
  };

  return { daysConvertor };
}
