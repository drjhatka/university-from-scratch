import { connect, MongooseError } from "mongoose";
import { config } from "./app/config";
import app from "./app";
import { Server } from "http";

let server:Server;
//connect to mongodb server
async function main() { // make the server listen to the specified port
    try {
        //connect to mongodb database
        await connect(config.database_url as string).then(() => { console.log('connected to database') })
        server = app.listen(config.port, () => { console.log('Server is all ears on port ' + config.port) })
    } catch (err) {
        if (err instanceof MongooseError) {
            console.log("Mongoose Error - ", err.message)
        }
    }
}
main()

//unhandled exception is required ONLY when there is no try-catch block while connecting mongodb
// process.on('unhandledRejection', () => {
//     console.log('unhandled Rejection encountered')
//     if (server) {
//         server.close(()=>{
//             process.exit(1)
//         })
//     }
//     process.exit(1)
// })

