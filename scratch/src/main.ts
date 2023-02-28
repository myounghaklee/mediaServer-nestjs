import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Module({
    controllers : [AppController]
})
class AppModule{

}

async function bootstrap(){
    const app = await NestFactory.create(AppModule);

    await app.listen(3000);
}

bootstrap();