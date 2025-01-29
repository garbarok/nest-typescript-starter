import { Module } from '@nestjs/common';
import { UsersModule } from '@contexts/users/users.module';
import { AuthModule } from '@contexts/auth/auth.module';
import { SharedModule } from '@contexts/shared/shared.module';

@Module({
  imports: [UsersModule, AuthModule, SharedModule],
})
export class AppModule {}
