package net.arturka

import io.ktor.server.engine.*
import io.ktor.server.netty.*
import net.arturka.plugins.*

fun main() {
    embeddedServer(Netty, port = 8080, host = "0.0.0.0") {
        configureRouting()
        configureHTTP()
        configureMonitoring()
        configureSerialization()
        configureSockets()
        configureSecurity()
    }.start(wait = true)
}
