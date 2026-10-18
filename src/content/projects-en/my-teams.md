---
summary: A client and server team messaging app in C, over TCP, with its own documented protocol.
---

A team messaging clone: teams, channels, threads and private messages. The server handles every client in a single process with `poll(2)`, with no threads or `fork`.

## Key points

- **MTCP/1.0** protocol written as an RFC: frame format, commands, response codes and events.
- Real-time notifications for connected clients.
- Data persisted between two runs of the server.

Private repository (Epitech project).
