package net.arturka.plugins

import io.ktor.server.routing.*
import io.ktor.http.*
import io.ktor.server.plugins.autohead.*
import io.ktor.server.locations.*
import io.ktor.server.http.content.*
import io.ktor.server.plugins.statuspages.*
import io.ktor.server.webjars.*
import java.time.*
import io.ktor.server.application.*
import io.ktor.server.config.*
import io.ktor.server.response.*
import io.ktor.server.request.*
import net.arturka.Backend
import net.arturka.Config
import java.util.StringJoiner

fun Application.configureRouting() {
    install(AutoHeadResponse)
    install(Locations) {
    }

    install(StatusPages) {
        exception<AuthenticationException> { call, cause ->
            call.respond(HttpStatusCode.Unauthorized)
        }
        exception<AuthorizationException> { call, cause ->
            call.respond(HttpStatusCode.Forbidden)
        }
    }

    install(Webjars) {
        path = "/webjars" //defaults to /webjars
    }

    routing {
        route("api/"){
            data class Vote(
                val artist: String,
                val phone: String,
            )

            data class Stats(
                val artists: List<String> = listOf(),
                val start: Long = Instant.now().epochSecond,
                val end: Long = Instant.now().epochSecond,
                val interval: Long = 1,
            )

            post("vote"){
                val req = call.receive<Vote>()

                try {
                    Backend.vote(req.artist, req.phone)
                } catch (e: Error) {
                    call.respond(mapOf(
                        "type" to "error",
                        "msg" to e.message
                    ))

                    return@post;
                }

                call.respond(mapOf(
                    "type" to "ok"
                ))
            }

            get("vote"){
//                call.respondText(Config.config.property("arturka.artists").getList().toString());
//                print();
                call.respond(mapOf(
                    "type" to "ok",
                    "data" to Backend.getVote()
                ))
            }

            get("stats"){
                val req = call.parameters
                val ret = Stats(
                    req["artists"]?.split(",") ?: listOf(),
                    req["start"]?.toLong() ?: Instant.now().epochSecond,
                    req["end"]?.toLong() ?: Instant.now().epochSecond,
                    req["interval"]?.toLong() ?: 1,
                    )

                call.respond(mapOf(
                    "type" to "ok",
                    "data" to Backend.stats(ret.artists, ret.start, ret.end, ret.interval)
                ))

//                call.respond("da")
            }
        }

        get("/") {
            call.respondText("Hello World!")
        }
        get<MyLocation> {
            call.respondText("Location: name=${it.name}, arg1=${it.arg1}, arg2=${it.arg2}")
        }
        // Register nested routes
        get<Type.Edit> {
            call.respondText("Inside $it")
        }
        get<Type.List> {
            call.respondText("Inside $it")
        }
        // Static plugin. Try to access `/static/index.html`
        static("/static") {
            resources("static")
        }
        get("/webjars") {
            call.respondText("<script src='/webjars/jquery/jquery.js'></script>", ContentType.Text.Html)
        }
    }
}

@Location("/location/{name}")
class MyLocation(val name: String, val arg1: Int = 42, val arg2: String = "default")
@Location("/type/{name}")
data class Type(val name: String) {
    @Location("/edit")
    data class Edit(val type: Type)

    @Location("/list/{page}")
    data class List(val type: Type, val page: Int)
}

class AuthenticationException : RuntimeException()
class AuthorizationException : RuntimeException()
