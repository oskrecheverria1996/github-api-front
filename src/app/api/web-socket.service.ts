import { EventEmitter, Injectable, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService extends Socket {

  @Output() outEven: EventEmitter<any> = new EventEmitter(); 

  constructor(private socket: Socket,
      private cookieService: CookieService
  ) {
    const param = cookieService.get('token');
    super({
        url: 'ws://localhost:3000',
        options: {
          query: {
            param
          }
        },
      });
   
      /**
       * ---------------- ESCUCHAMOS----------------
       * En este punto nuestro socket.io-client esta listo para recibir los eventos.
       * 
       * En esta funcion vemos como esta preparado para recibir un evento llamado "message" el cual
       * una vez sea recibido va a emitir por nuestro "outEven"
       */
      this.ioSocket.on('sendNotification', (res) => {
        console.log('socket:', res)
        this.outEven.emit(res)
      })

  }

    /**
     * ---------------- EMITIR-------------------
     * Ahora solo nos falta poder emitir mensajes, para ello declaramos la funcion
     * "emitEvent" la cual va ser disparada por un "(click)" la cual emite un envento
     * con el nombre "default", y un payload de información el cual sera parseado 
     * por nuestro backend.
     */

    emitEvent = (event = 'requestNotification',payload = {}) => {
      this.ioSocket.emit('requestNotification', {
          event,
          payload
      });
  }

}
