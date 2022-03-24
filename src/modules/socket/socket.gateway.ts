import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Messages } from '@protobuf/Messages';
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

  @SubscribeMessage('chat')
  handleMessage(client: any, payload: any) {
    console.log('chat payload', payload);
    client.send(JSON.stringify(this.createWsResponse('chat', payload)));
  }

  @SubscribeMessage('chatEncode')
  handleEncode(client: any, payload: any) {
    console.log('chatEncode payload', payload);
    const sendChatData: Messages.ISendChat = {
      content: payload,
    };
    const buffer = Messages.SendChat.encode(sendChatData).finish();
    client.send(JSON.stringify(this.createWsResponse('chatEncode', buffer)));
  }
}
