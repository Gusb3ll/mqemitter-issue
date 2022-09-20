import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius'

import { mqemitter } from './libs/emitter'
import { UserModule } from './gql/user/user.module'

@Module({
	imports: [
		GraphQLModule.forRoot<MercuriusDriverConfig>({
			driver: MercuriusDriver,
			autoSchemaFile: true,
			//! Error when emitter is called
			subscription: {
				emitter: mqemitter
			}
		}),
		UserModule
	]
})
export class AppModule {}