import { Notify } from 'quasar';

export function useNotify(msg?: string, caption?: string, time?: number) {
  if (!msg) msg = ' ';
  if (!time) time = 3000;
  if (!caption) caption = ' ';

  //* ------ Success Notify ------
  function success(msg?: string, caption?: string, time?: number, icon?: string) {
    return Notify.create({
      html: true,
      color: 'positive',
      classes: 'success',
      textColor: 'white',
      timeout: !time ? 3000 : time,
      icon: !icon ? 'error' : icon,
      message: !msg ? ' ' : `<div style="font-size:17.5px;font-weight:500;">${msg}</div>`,
      caption: !caption ? ' ' : `<div style="font-size:14px;font-weight:500;">${caption}</div>`,
    });
  }
  //* ------ error Notify ------
  function error(msg?: string, caption?: string, time?: number, icon?: string) {
    return Notify.create({
      html: true,
      color: 'negative',
      classes: 'danger',
      textColor: 'white',
      timeout: !time ? 3000 : time,
      icon: !icon ? 'error' : icon,
      message: !msg ? ' ' : `<div style="font-size:17.5px;font-weight:500;">${msg}</div>`,
      caption: !caption ? ' ' : `<div style="font-size:14px;font-weight:500;">${caption}</div>`,
    });
  }
  //* ------ Info Notify ------
  function info(msg?: string, caption?: string, time?: number, icon?: string) {
    return Notify.create({
      html: true,
      classes: 'info',
      color: 'primary',
      textColor: 'white',
      timeout: !time ? 3000 : time,
      icon: !icon ? 'error' : icon,
      message: !msg ? ' ' : `<div style="font-size:17.5px;font-weight:500;">${msg}</div>`,
      caption: !caption ? ' ' : `<div style="font-size:14px;font-weight:500;">${caption}</div>`,
    });
  }
  //* ------ Warning Notify ------
  function warn(msg?: string, caption?: string, time?: number, icon?: string) {
    return Notify.create({
      html: true,
      color: 'warning',
      classes: 'warning',
      textColor: 'white',
      timeout: !time ? 3000 : time,
      icon: !icon ? 'error' : icon,
      message: !msg ? ' ' : `<div style="font-size:17.5px;font-weight:500;">${msg}</div>`,
      caption: !caption ? ' ' : `<div style="font-size:14px;font-weight:500;">${caption}</div>`,
    });
  }

  return {
    info,
    warn,
    error,
    success,
  };
}
