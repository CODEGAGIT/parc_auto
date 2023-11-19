const cors = require('cors')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const compress = require('compression')
const morgan = require('morgan')
const helmet = require('helmet')
const express = require('express')
const userRoute = require('./Routes/UserRoutes')
const conducteurRoute = require('./Routes/ConducteurRoutes')
const vehiculeRoute = require('./Routes/VehiculeRoutes')
const carburantRoute = require('./Routes/CarburantRoutes')
const garageRoute = require('./Routes/GarageRoutes')
const visiteRoute = require('./Routes/VisitetechRoutes')
const assuranceRoute = require('./Routes/AssuranceRoutes')
const departementRoute = require('./Routes/DepartementRoutes')
const entretienRoute = require('./Routes/EntretienRoutes')
const reparationRoute = require('./Routes/ReparationRoutes')
const roleRoute = require('./Routes/RoleRoutes')
const marqueRoute = require('./Routes/MarquesRoutes')
const affectVDRoute = require('./Routes/AffectVDRoutes')



require("./Configs/DBase")

const ip = '0.0.0.0' 
//definir le port
const PORT = process.env.Node_PORT || 2000
require("./Configs/DBase")
const app = express()

const onstart = () => {
const ENVIRONMENT = process.env.Node_ENV || 'developpememt'
const message = `server listening on port ${PORT}, ENVIRONMENT=${ENVIRONMENT}`
console.log(message)
}
app.use(express.static('public'))
const s = app.listen(PORT, ip, onstart)

app.use(cors())
app.use(methodOverride())
app.use(bodyParser.json())
app.use(compress())
app.use(morgan("tiny"))
app.use(helmet())
app.use(express.json())


app.use('/api/users', userRoute)
app.use('/api/conducteurs', conducteurRoute)
app.use('/api/vehicules', vehiculeRoute)
app.use('/api/carburants', carburantRoute)
app.use('/api/garages', garageRoute)
app.use('/api/visites', visiteRoute)
app.use('/api/assurances', assuranceRoute)
app.use('/api/departements', departementRoute)
app.use('/api/entretiens', entretienRoute)
app.use('/api/reparations', reparationRoute) 
app.use('/api/roles', roleRoute)
app.use('/api/marques', marqueRoute)
app.use('/api/affects', affectVDRoute)