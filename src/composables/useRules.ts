export function useRules() {
  const required = (val: string) => val && val.length > 0 || 'This field is required';
  return { required };
}
