package net.arturka

//import com.mantono.ktor.ratelimiting.RateLimiting
import dev.forst.ktor.ratelimiting.RateLimiting
import com.typesafe.config.ConfigFactory
import io.ktor.http.*
import io.ktor.server.application.*
//import io.ktor.server.application.call
import io.ktor.server.config.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.*
import io.ktor.server.request.*
import net.arturka.plugins.*
import java.awt.SystemColor.window
import java.lang.Long.max
import java.lang.Long.min
import java.time.Duration
import java.time.Instant

fun main(args: Array<String>): Unit = EngineMain.main(args)

/*{
    embeddedServer(Netty, port = 8080, host = "0.0.0.0") {

    }.start(wait = true)
}*/

object Config {
    val config = HoconApplicationConfig(ConfigFactory.load())

    fun getProperty(key: String): String? = config.propertyOrNull(key)?.getString()

    fun requireProperty(key: String): String = getProperty(key)
        ?: throw IllegalStateException("Missing property $key")
}

object Backend {
    data class Vote(
        val timestamp: Long = 0
    )

    data class ArtistVote(
        val name: String,
        val votes: Long,
    )

    data class Stats(
        val start: Long,
        val end: Long,
        var votes: Long,
    )

    var actorList: HashMap<String, HashMap<String, MutableList<Vote>>> = hashMapOf()

    init {
        for(i in Config.config.property("arturka.artists").getList()){
            actorList[i] = hashMapOf()
        }
    }

    fun vote(artist: String, phone: String){
        if(!"""9\d{9}""".toRegex().matches(phone))
            throw Error("phone format is not valid")

        if(!actorList.containsKey(artist))
            throw Error("artist not found")

        if(actorList.getValue(artist)[phone] == null)
            actorList.getValue(artist)[phone] = mutableListOf()

        actorList.getValue(artist).getValue(phone).add(Vote(Instant.now().epochSecond));
    }

    fun getVote(): List<ArtistVote>{
        val ret: MutableList<ArtistVote> = mutableListOf()

        for(i in actorList){
            var sumVote: Long = 0

            for(j in i.value){
                sumVote += j.value.size
            }

            ret.add(ArtistVote(i.key, sumVote))
        }

        return ret
    }

    fun stats(artists: List<String>, from: Long, to: Long, interval: Long): HashMap<Long, Stats>{
        val ret: HashMap<Long, Stats> = hashMapOf()
        val step: Long = (to - from) / interval

        for(i in 0 until interval){
            ret[i] = Stats(from + (step * i), from + (step * (i + 1)), 0)
        }

        for(i in actorList){
            if(i.key !in artists) continue

            for(j in i.value){
                for(c in j.value){
                    ret[max(min((c.timestamp - from) / step, interval), 0)]!!.votes++
                }
            }
        }

        return ret
    }
}

fun Application.main(){
    install(RateLimiting) {
        registerLimit(
            limit = 20,
            window = Duration.ofMinutes(1)
        ) {
            request.origin.host
        }
        excludeRequestWhen {
            request.path().endsWith("excluded")
        }
    }

    configureRouting()
    configureSecurity()
    configureHTTP()
    configureMonitoring()
    configureSerialization()
    configureSockets()
}