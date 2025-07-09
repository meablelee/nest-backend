import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { TestService } from './test.service';
import { Test } from './test.entity';

@ApiTags('测试接口')
@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get('getAll')
  @ApiOperation({ summary: '获取所有测试数据' })
  async findAll(): Promise<Test[]> {
    return this.testService.findAll();
  }

  @Post('create')
  @ApiOperation({ summary: '新增测试数据' })
  async create(@Body() createTestDto: Partial<Test>): Promise<Test> {
    return this.testService.create(createTestDto);
  }

  @Post('batch')
  @ApiOperation({ summary: '批量新增测试数据' })
  async createBatch(@Body() data: Partial<Test>[]): Promise<Test[]> {
    return this.testService.createBatch(data);
  }

}
