'use strict';

// Generated by CoffeeScript 1.7.1

/*
 Stomp Over WebSocket http://www.jmesnil.net/stomp-websocket/doc/ | Apache License V2.0

 Copyright (C) 2013 [Jeff Mesnil](http://jmesnil.net/)
 */

(function () {
  var Stomp, net, overTCP, overWS, wrapTCP, wrapWS;

  Stomp = require('./stomp');

  net = require('net');

  Stomp.Stomp.setInterval = function (interval, f) {
    return setInterval(f, interval);
  };

  Stomp.Stomp.clearInterval = function (id) {
    return clearInterval(id);
  };

  wrapTCP = function wrapTCP(port, host) {
    var socket, ws;
    socket = null;
    ws = {
      url: 'tcp:// ' + host + ':' + port,
      send: function send(d) {
        return socket.write(d);
      },
      close: function close() {
        return socket.end();
      }
    };
    socket = net.connect(port, host, function (e) {
      return ws.onopen();
    });
    socket.on('error', function (e) {
      return typeof ws.onclose === "function" ? ws.onclose(e) : void 0;
    });
    socket.on('close', function (e) {
      return typeof ws.onclose === "function" ? ws.onclose(e) : void 0;
    });
    socket.on('data', function (data) {
      var event;
      event = {
        'data': data.toString()
      };
      return ws.onmessage(event);
    });
    return ws;
  };

  wrapWS = function wrapWS(url) {
    var WebSocketClient, connection, socket, ws;
    WebSocketClient = require('websocket').client;
    connection = null;
    ws = {
      url: url,
      send: function send(d) {
        return connection.sendUTF(d);
      },
      close: function close() {
        return connection.close();
      }
    };
    socket = new WebSocketClient();
    socket.on('connect', function (conn) {
      connection = conn;
      ws.onopen();
      connection.on('error', function (error) {
        return typeof ws.onclose === "function" ? ws.onclose(error) : void 0;
      });
      connection.on('close', function () {
        return typeof ws.onclose === "function" ? ws.onclose() : void 0;
      });
      return connection.on('message', function (message) {
        var event;
        if (message.type === 'utf8') {
          event = {
            'data': message.utf8Data
          };
          return ws.onmessage(event);
        }
      });
    });
    socket.connect(url);
    return ws;
  };

  overTCP = function overTCP(host, port) {
    var socket;
    socket = wrapTCP(port, host);
    return Stomp.Stomp.over(socket);
  };

  overWS = function overWS(url) {
    var socket;
    socket = wrapWS(url);
    return Stomp.Stomp.over(socket);
  };

  exports.overTCP = overTCP;

  exports.overWS = overWS;
}).call(undefined);