import { useQuasar } from 'quasar';
export function useIcon() {
  // ------ Type ------
  type IconPaths = { [key: string]: string };
  // ------ Variables ------
  const $q = useQuasar();
  const myIcons: IconPaths = {
    'favorite-fill': 'img:/src/assets/icon/favorite-fill.svg',
    'favorite-outline': 'img:/src/assets/icon/favorite-outline.svg',
  };
  const loadIcon = () => {
    $q.iconMapFn = (iconName) => {
      const icon = myIcons[iconName];
      if (icon !== undefined) return { icon };
    };
  };
  return { loadIcon };
}
