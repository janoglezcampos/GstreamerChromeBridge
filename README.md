# GstreamerChromeBridge
Simple script that creates a TCP server to receive a gstreamer stream adding the needed headers to work on Chrome.

Problem: Chrome requires some http headers to be able to load resources.

Solution: Place an intermediate app wrote on nodejs to serve the streaming adding the required header.

The code on this repository is a copy, paste and try, but it works :)

I have 2 versions of the code, one of them starts the gstreamer pipeline on the fly spawning a child process, while the other just create the TCP server and is up to you to start the pipeline, the only change is found when starting the the TCP server (tcpServer.listen(8081... ) where we add the function to start the child process.
