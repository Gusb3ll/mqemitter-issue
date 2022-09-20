import { Resolver, Query } from "@nestjs/graphql";

import { UserService } from "./user.service";

@Resolver()
export class UserResolver {
	constructor(private readonly service: UserService) {}

	@Query(() => String)
	hello(): string {
		return this.service.hello();
	}
}
