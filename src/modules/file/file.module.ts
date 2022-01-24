import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { FileService } from './file.service';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { join } from 'path';
@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        // 配置文件上传后的文件夹路径
        destination: join(
          __dirname,
          '../../../',
          `/public/uploads/${dayjs().format('YYYY-MM-DD')}`,
        ),
        filename: (req, file, cb) => {
          // 在此处自定义保存后的文件名称
          const filename = `${uuidv4()}.${file.mimetype.split('/')[1]}`;
          return cb(null, filename);
        },
      }),
    }),
  ],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
