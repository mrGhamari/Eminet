import { useQuasar } from 'quasar';
export function useIcon() {
  // ------ Variables ------
  const $q = useQuasar();
  const myIcons = {
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
