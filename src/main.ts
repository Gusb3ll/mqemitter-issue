import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import {
	FastifyAdapter,
	NestFastifyApplication
} from '@nestjs/platform-fastify'

import { AppModule } from './app.module'
//
;(async () => {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter(),
		{
			bodyParser: true,
			cors: true
		}
	)

	await app.listen(4000, 'localhost')
  console.log('\n Listening at http://localhost:4000/graphql \n')
})()