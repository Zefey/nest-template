import * as $protobuf from 'protobufjs';
/** Namespace Messages. */
export namespace Messages {
  /** Properties of a SendChat. */
  interface ISendChat {
    /** SendChat content */
    content?: string | null;
  }

  /** Represents a SendChat. */
  class SendChat implements ISendChat {
    /**
     * Constructs a new SendChat.
     * @param [properties] Properties to set
     */
    constructor(properties?: Messages.ISendChat);

    /** SendChat content. */
    public content: string;

    /**
     * Creates a new SendChat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SendChat instance
     */
    public static create(properties?: Messages.ISendChat): Messages.SendChat;

    /**
     * Encodes the specified SendChat message. Does not implicitly {@link Messages.SendChat.verify|verify} messages.
     * @param message SendChat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: Messages.ISendChat,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified SendChat message, length delimited. Does not implicitly {@link Messages.SendChat.verify|verify} messages.
     * @param message SendChat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: Messages.ISendChat,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a SendChat message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SendChat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): Messages.SendChat;

    /**
     * Decodes a SendChat message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SendChat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): Messages.SendChat;

    /**
     * Verifies a SendChat message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a SendChat message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SendChat
     */
    public static fromObject(object: { [k: string]: any }): Messages.SendChat;

    /**
     * Creates a plain object from a SendChat message. Also converts values to other types if specified.
     * @param message SendChat
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: Messages.SendChat,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this SendChat to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a ReceiveChat. */
  interface IReceiveChat {
    /** ReceiveChat code */
    code?: number | null;

    /** ReceiveChat content */
    content?: string | null;
  }

  /** Represents a ReceiveChat. */
  class ReceiveChat implements IReceiveChat {
    /**
     * Constructs a new ReceiveChat.
     * @param [properties] Properties to set
     */
    constructor(properties?: Messages.IReceiveChat);

    /** ReceiveChat code. */
    public code: number;

    /** ReceiveChat content. */
    public content: string;

    /**
     * Creates a new ReceiveChat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReceiveChat instance
     */
    public static create(
      properties?: Messages.IReceiveChat,
    ): Messages.ReceiveChat;

    /**
     * Encodes the specified ReceiveChat message. Does not implicitly {@link Messages.ReceiveChat.verify|verify} messages.
     * @param message ReceiveChat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: Messages.IReceiveChat,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified ReceiveChat message, length delimited. Does not implicitly {@link Messages.ReceiveChat.verify|verify} messages.
     * @param message ReceiveChat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: Messages.IReceiveChat,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a ReceiveChat message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReceiveChat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): Messages.ReceiveChat;

    /**
     * Decodes a ReceiveChat message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReceiveChat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): Messages.ReceiveChat;

    /**
     * Verifies a ReceiveChat message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ReceiveChat message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReceiveChat
     */
    public static fromObject(object: {
      [k: string]: any;
    }): Messages.ReceiveChat;

    /**
     * Creates a plain object from a ReceiveChat message. Also converts values to other types if specified.
     * @param message ReceiveChat
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: Messages.ReceiveChat,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ReceiveChat to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }
}
