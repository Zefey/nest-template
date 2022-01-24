import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { FileUploadDto } from './dto/upload.dto';

@Controller('file')
export class FileController {
  @Post('upload')
  @UseInterceptors(FilesInterceptor('files'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: '文件上传',
    type: FileUploadDto,
  })
  uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
    return files;
  }
}
