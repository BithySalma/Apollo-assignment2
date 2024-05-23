import express,{Request,Response} from 'express';
import { ProductRoute } from './app/modules/products/product.route';
const app = express()

app.use(express.json())
app.use("/api/products", ProductRoute)



app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})
export default app;
