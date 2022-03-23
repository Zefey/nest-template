import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';

@WebSocketGateway()
export class SocketGateway {
  @WebSocketServer() server;

  handleConnection(client: any) {
    console.log(`connection - ${client.id}`);
  }

  handleDisconnect(client: any) {
    console.log(`disconnection - ${client.id}`);
  }

  private createWsResponse<T>(event: string, data: T) {
    const response: WsResponse<T> = {
      event: event,
      data: data,
    };

    return response;
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any) {
    console.log('payload', payload);
    client.send(JSON.stringify(this.createWsResponse('message', payload)));
  }
}
