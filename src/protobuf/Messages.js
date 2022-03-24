/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
'use strict';

var $protobuf = require('protobufjs/minimal');

// Common aliases
var $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots['default'] || ($protobuf.roots['default'] = {});

$root.Messages = (function () {
  /**
   * Namespace Messages.
   * @exports Messages
   * @namespace
   */
  var Messages = {};

  Messages.SendChat = (function () {
    /**
     * Properties of a SendChat.
     * @memberof Messages
     * @interface ISendChat
     * @property {string|null} [content] SendChat content
     */

    /**
     * Constructs a new SendChat.
     * @memberof Messages
     * @classdesc Represents a SendChat.
     * @implements ISendChat
     * @constructor
     * @param {Messages.ISendChat=} [properties] Properties to set
     */
    function SendChat(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * SendChat content.
     * @member {string} content
     * @memberof Messages.SendChat
     * @instance
     */
    SendChat.prototype.content = '';

    /**
     * Creates a new SendChat instance using the specified properties.
     * @function create
     * @memberof Messages.SendChat
     * @static
     * @param {Messages.ISendChat=} [properties] Properties to set
     * @returns {Messages.SendChat} SendChat instance
     */
    SendChat.create = function create(properties) {
      return new SendChat(properties);
    };

    /**
     * Encodes the specified SendChat message. Does not implicitly {@link Messages.SendChat.verify|verify} messages.
     * @function encode
     * @memberof Messages.SendChat
     * @static
     * @param {Messages.ISendChat} message SendChat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendChat.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.content != null &&
        Object.hasOwnProperty.call(message, 'content')
      )
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.content);
      return writer;
    };

    /**
     * Encodes the specified SendChat message, length delimited. Does not implicitly {@link Messages.SendChat.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Messages.SendChat
     * @static
     * @param {Messages.ISendChat} message SendChat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendChat.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SendChat message from the specified reader or buffer.
     * @function decode
     * @memberof Messages.SendChat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Messages.SendChat} SendChat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendChat.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.Messages.SendChat();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.content = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a SendChat message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Messages.SendChat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Messages.SendChat} SendChat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendChat.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SendChat message.
     * @function verify
     * @memberof Messages.SendChat
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SendChat.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.content != null && message.hasOwnProperty('content'))
        if (!$util.isString(message.content)) return 'content: string expected';
      return null;
    };

    /**
     * Creates a SendChat message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Messages.SendChat
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Messages.SendChat} SendChat
     */
    SendChat.fromObject = function fromObject(object) {
      if (object instanceof $root.Messages.SendChat) return object;
      var message = new $root.Messages.SendChat();
      if (object.content != null) message.content = String(object.content);
      return message;
    };

    /**
     * Creates a plain object from a SendChat message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Messages.SendChat
     * @static
     * @param {Messages.SendChat} message SendChat
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SendChat.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) object.content = '';
      if (message.content != null && message.hasOwnProperty('content'))
        object.content = message.content;
      return object;
    };

    /**
     * Converts this SendChat to JSON.
     * @function toJSON
     * @memberof Messages.SendChat
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SendChat.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SendChat;
  })();

  Messages.ReceiveChat = (function () {
    /**
     * Properties of a ReceiveChat.
     * @memberof Messages
     * @interface IReceiveChat
     * @property {number|null} [code] ReceiveChat code
     * @property {string|null} [content] ReceiveChat content
     */

    /**
     * Constructs a new ReceiveChat.
     * @memberof Messages
     * @classdesc Represents a ReceiveChat.
     * @implements IReceiveChat
     * @constructor
     * @param {Messages.IReceiveChat=} [properties] Properties to set
     */
    function ReceiveChat(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReceiveChat code.
     * @member {number} code
     * @memberof Messages.ReceiveChat
     * @instance
     */
    ReceiveChat.prototype.code = 0;

    /**
     * ReceiveChat content.
     * @member {string} content
     * @memberof Messages.ReceiveChat
     * @instance
     */
    ReceiveChat.prototype.content = '';

    /**
     * Creates a new ReceiveChat instance using the specified properties.
     * @function create
     * @memberof Messages.ReceiveChat
     * @static
     * @param {Messages.IReceiveChat=} [properties] Properties to set
     * @returns {Messages.ReceiveChat} ReceiveChat instance
     */
    ReceiveChat.create = function create(properties) {
      return new ReceiveChat(properties);
    };

    /**
     * Encodes the specified ReceiveChat message. Does not implicitly {@link Messages.ReceiveChat.verify|verify} messages.
     * @function encode
     * @memberof Messages.ReceiveChat
     * @static
     * @param {Messages.IReceiveChat} message ReceiveChat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReceiveChat.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.code != null && Object.hasOwnProperty.call(message, 'code'))
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.code);
      if (
        message.content != null &&
        Object.hasOwnProperty.call(message, 'content')
      )
        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.content);
      return writer;
    };

    /**
     * Encodes the specified ReceiveChat message, length delimited. Does not implicitly {@link Messages.ReceiveChat.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Messages.ReceiveChat
     * @static
     * @param {Messages.IReceiveChat} message ReceiveChat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReceiveChat.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReceiveChat message from the specified reader or buffer.
     * @function decode
     * @memberof Messages.ReceiveChat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Messages.ReceiveChat} ReceiveChat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReceiveChat.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.Messages.ReceiveChat();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.code = reader.int32();
            break;
          case 3:
            message.content = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a ReceiveChat message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Messages.ReceiveChat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Messages.ReceiveChat} ReceiveChat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReceiveChat.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReceiveChat message.
     * @function verify
     * @memberof Messages.ReceiveChat
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReceiveChat.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.code != null && message.hasOwnProperty('code'))
        if (!$util.isInteger(message.code)) return 'code: integer expected';
      if (message.content != null && message.hasOwnProperty('content'))
        if (!$util.isString(message.content)) return 'content: string expected';
      return null;
    };

    /**
     * Creates a ReceiveChat message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Messages.ReceiveChat
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Messages.ReceiveChat} ReceiveChat
     */
    ReceiveChat.fromObject = function fromObject(object) {
      if (object instanceof $root.Messages.ReceiveChat) return object;
      var message = new $root.Messages.ReceiveChat();
      if (object.code != null) message.code = object.code | 0;
      if (object.content != null) message.content = String(object.content);
      return message;
    };

    /**
     * Creates a plain object from a ReceiveChat message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Messages.ReceiveChat
     * @static
     * @param {Messages.ReceiveChat} message ReceiveChat
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReceiveChat.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.code = 0;
        object.content = '';
      }
      if (message.code != null && message.hasOwnProperty('code'))
        object.code = message.code;
      if (message.content != null && message.hasOwnProperty('content'))
        object.content = message.content;
      return object;
    };

    /**
     * Converts this ReceiveChat to JSON.
     * @function toJSON
     * @memberof Messages.ReceiveChat
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReceiveChat.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReceiveChat;
  })();

  return Messages;
})();

module.exports = $root;
