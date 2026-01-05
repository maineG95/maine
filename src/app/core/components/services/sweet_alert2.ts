import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SweetAlert2Service {
  ToastOption = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
  });

  toastSuccess(message: string): void {
    this.ToastOption.fire({
      icon: 'success',
      title: message,
    });
  }
  toastError(message: string): void {
    this.ToastOption.fire({
      icon: 'error',
      title: message,
    });
  }
  toastWarning(message: string): void {
    this.ToastOption.fire({
      icon: 'warning',
      title: message,
    });
  }
  toastInfo(message: string): void {
    this.ToastOption.fire({
      icon: 'info',
      title: message,
    });
  }
  toastQuestion(message: string): void {
    this.ToastOption.fire({
      icon: 'question',
      title: message,
    });
  }

  toggleLoading(): void {
    let timerInterval;
    Swal.fire({
      timerProgressBar: true,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer');
      }
    });
  }

  showLoading(): void {
    let timerInterval;
    Swal.fire({
      timerProgressBar: true,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer');
      }
    });
  }

  closeLoading(): void {
    Swal.close();
  }
}
