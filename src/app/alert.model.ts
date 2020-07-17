export enum AlertType {
  success = 'success',
  info = 'info',
  warning = 'warning',
  danger = 'danger',
}

export interface Alert {
  type: AlertType;
  message: string;
}
